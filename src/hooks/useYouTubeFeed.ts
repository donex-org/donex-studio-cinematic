import { useState, useEffect } from "react";
import { db } from "../lib/firebase";
import { collection, query, where, orderBy, onSnapshot } from "firebase/firestore";
import { syncFeeds } from "../lib/feedSync";

export type YouTubeVideo = {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    videoUrl: string;
    publishedAt: string;
};

export const useYouTubeFeed = () => {
    const [videos, setVideos] = useState<YouTubeVideo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Trigger sync in background
        syncFeeds();

        // Subscribe to Firestore updates
        const q = query(
            collection(db, "youtube_feed"),
            where("isActive", "==", true),
            orderBy("publishedAt", "desc")
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const fetchedVideos: YouTubeVideo[] = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            } as YouTubeVideo));

            setVideos(fetchedVideos);
            setLoading(false);
        }, (err) => {
            setError("Failed to load videos from cache");
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return { videos, loading, error };
};
