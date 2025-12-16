import { db } from "./firebase";
import { collection, getDocs, doc, setDoc, getDoc, Timestamp, writeBatch, query, where } from "firebase/firestore";
import { config } from "../config";

const CACHE_DURATION_HOURS = 24;

export const syncFeeds = async () => {
    await syncYouTubeFeed();
};

const shouldUpdate = async (feedName: string): Promise<boolean> => {
    try {
        const docRef = doc(db, "feed_metadata", feedName);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const lastUpdated = docSnap.data().lastUpdated as Timestamp;
            const now = Timestamp.now();
            const diffHours = (now.toMillis() - lastUpdated.toMillis()) / (1000 * 60 * 60);

            return diffHours > CACHE_DURATION_HOURS;
        }
        return true; // No metadata, update needed
    } catch (e) {
        return true;
    }
};

const updateMetadata = async (feedName: string) => {
    try {
        await setDoc(doc(db, "feed_metadata", feedName), {
            lastUpdated: Timestamp.now()
        });
    } catch (e) {
        // Silent fail
    }
};

const syncYouTubeFeed = async () => {
    if (!config.youtube.apiKey || !config.youtube.channelId) return;

    if (!(await shouldUpdate("youtube"))) {
        return;
    }

    try {
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?key=${config.youtube.apiKey}&channelId=${config.youtube.channelId}&part=snippet,id&order=date&maxResults=9&type=video`
        );

        if (!response.ok) throw new Error("Failed to fetch YouTube videos");

        const data = await response.json();
        const items = data.items;

        const batch = writeBatch(db);

        items.forEach((item: any) => {
            const videoId = item.id.videoId;
            const docRef = doc(db, "youtube_feed", videoId);
            batch.set(docRef, {
                id: videoId,
                title: item.snippet.title,
                description: item.snippet.description,
                thumbnail: item.snippet.thumbnails.high.url,
                videoUrl: `https://www.youtube.com/watch?v=${videoId}`,
                publishedAt: item.snippet.publishedAt,
                isActive: true,
                updatedAt: Timestamp.now()
            });
        });

        await batch.commit();
        await updateMetadata("youtube");
    } catch (err) {
        // Silent fail
    }
};
