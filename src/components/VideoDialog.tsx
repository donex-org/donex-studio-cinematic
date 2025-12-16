import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Play } from "lucide-react";

interface VideoDialogProps {
    videoUrl: string;
    thumbnail: string;
    title: string;
}

const VideoDialog = ({ videoUrl, thumbnail, title }: VideoDialogProps) => {
    // Extract video ID from URL if it's a standard YouTube URL
    // This is a simple extraction, might need to be more robust for different URL formats
    const getEmbedUrl = (url: string) => {
        if (url.includes("embed")) return url;

        let videoId = "";
        if (url.includes("youtube.com/watch?v=")) {
            videoId = url.split("v=")[1].split("&")[0];
        } else if (url.includes("youtu.be/")) {
            videoId = url.split("youtu.be/")[1].split("?")[0];
        }

        return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : url;
    };

    const embedUrl = getEmbedUrl(videoUrl);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="relative aspect-video overflow-hidden cursor-pointer group">
                    <img
                        src={thumbnail}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
                        <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Play className="w-5 h-5 text-white ml-1" fill="currentColor" />
                        </div>
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl p-0 bg-black border-white/10">
                <DialogHeader className="sr-only">
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                <div className="aspect-video w-full bg-black flex items-center justify-center">
                    {videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be") ? (
                        <iframe
                            src={embedUrl}
                            className="w-full h-full"
                            title={title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    ) : (
                        <video
                            src={videoUrl}
                            className="w-full h-full"
                            controls
                            autoPlay
                        />
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default VideoDialog;
