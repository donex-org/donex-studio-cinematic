import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface LegalDialogProps {
    title: string;
    pdfUrl: string;
    triggerText: string;
    className?: string;
}

const LegalDialog = ({ title, pdfUrl, triggerText, className }: LegalDialogProps) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className={className}>{triggerText}</button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl h-[90vh] flex flex-col p-0">
                <DialogHeader className="px-6 py-4 border-b">
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                <div className="flex-1 w-full h-full bg-slate-50">
                    <iframe
                        src={`${pdfUrl}#toolbar=0`}
                        className="w-full h-full"
                        title={title}
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default LegalDialog;
