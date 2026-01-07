import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogDescription,
    DialogTrigger,
} from "@/components/ui/dialog";

interface ProjectDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    project: {
        title: string;
        period: string;
        description: string;
        highlights: string[];
        tech: string[];
        status: string;
        clients: string[];
        icon: React.ElementType;
    };
}

export default function ProjectDialog({ open, onOpenChange, project }: ProjectDialogProps) {
    const Icon = project.icon;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogTrigger asChild>
                {/* This can be a button, card, or any element that triggers the dialog */}
                <button className="sr-only">Open {project.title} Details</button>
            </DialogTrigger>

            <DialogContent className="!max-w-5xl w-[90vw] max-h-[85vh] overflow-y-auto no-scrollbar rounded-lg bg-background p-6 shadow-lg focus:outline-none">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-md bg-indigo-600 text-white">
                            <Icon size={28} />
                        </div>
                        <div>
                            <DialogTitle className="text-xl font-bold">{project.title}</DialogTitle>
                            <DialogDescription className="text-sm text-muted-foreground">
                                {project.period}
                            </DialogDescription>
                        </div>
                    </div>
                </div>

                <p className="mb-4 text-muted-foreground">{project.description}</p>

                <section className="mb-4">
                    <h4 className="font-semibold mb-2">Highlights</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                        {project.highlights.map((highlight, i) => (
                            <li key={i}>{highlight}</li>
                        ))}
                    </ul>
                </section>

                <section className="mb-4">
                    <h4 className="font-semibold mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                            <span
                                key={tech}
                                className="px-2 py-1 text-xs font-mono bg-secondary/50 text-muted-foreground rounded"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </section>

                <section className="mb-4">
                    <h4 className="font-semibold mb-2">Clients</h4>
                    <div className="flex flex-wrap gap-2">
                        {project.clients.map((client) => (
                            <span
                                key={client}
                                className="flex items-center gap-1 px-2 py-1 text-xs bg-purple/10 text-purple rounded-full"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3 w-3"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 21v-4a2 2 0 012-2h2a2 2 0 012 2v4m6 0v-4a2 2 0 012-2h2a2 2 0 012 2v4M4 7h16M4 7v4m0-4v-2a2 2 0 012-2h12a2 2 0 012 2v2M4 7h16"
                                    />
                                </svg>
                                {client}
                            </span>
                        ))}
                    </div>
                </section>

                <section className="pt-4 border-t border-border/50 text-xs text-muted-foreground">
                    Status:{" "}
                    <span
                        className={
                            project.status === "Live in Production" ? "text-green-600" : "text-yellow-600"
                        }
                    >
                        {project.status}
                    </span>
                </section>
            </DialogContent>
        </Dialog>
    );
}
