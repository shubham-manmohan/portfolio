import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Building2, FileCheck2, FileText, GitCompare, Layers, Server, Workflow } from "lucide-react";
import ProjectDialog from "./support/ProjectDialog";

const projects = [
    {
        title: "Trade Platform",
        period: "May 2025 - Present",
        icon: Layers,
        description: "Contributed to architecture and UI framework for a multi-service trade finance platform covering IRM, LC, BG, and regulatory reporting modules.",
        highlights: [
            "First corporate client-facing React UI framework by Impactsure",
            "POC for HDFC Bank, demos with SBI, Deutsche Bank, Euro Exim",
            "8+ microservices architecture with Flowable BPMN integration",
            "Reusable component library for multi-service UI",
        ],
        tech: ["React", "TypeScript", "Spring Boot", "Flowable BPMN", "Keycloak", "Microservices"],
        status: "In Development",
        clients: ["HDFC Bank", "SBI", "Deutsche Bank"],
    },
    {
        title: "SureEditor - Web DOCX Editor",
        period: "Feb 2024",
        icon: FileText,
        description: "In-house web-based DOCX editor built to replace CKEditor, providing full control over document processing and saving ~$3000 annually in licensing costs for each deployment.",
        highlights: [
            "DOCX to HTML conversion with ~90% accuracy",
            "HTML to DOCX/PDF reverse engineering",
            "Track changes and comment functionality",
            "Multi-user collaboration support",
        ],
        tech: ["Java", "Apache POI", "JSoup", "HTML/CSS"],
        status: "Live in Production",
        clients: ["SBI", "Axis Bank", "SIB"],
    },
    {
        title: "Document Comparison Engine",
        period: "Sept 2024",
        icon: GitCompare,
        description: "Advanced document comparison tool to prevent document forgery with side-by-side diff highlighting.",
        highlights: [
            "~90% accuracy for digital documents",
            "~80% accuracy for scanned documents using Paddle OCR",
            "Diff Match Patch algorithm integration",
            "Supports DOCX and PDF format combinations",
        ],
        tech: ["Python", "Paddle OCR", "Java", "Diff Match Patch", "Apache POI", "JSoup"],
        status: "Live in Production",
        clients: ["SBI", "Axis Bank", "SIB"],
    },
    {
        title: "SureSanction – Loan Sanctioning & E-Execution Platform",
        period: "Feb 2024 – April 2025",
        icon: FileCheck2,
        description:
            "Enterprise-grade loan sanctioning and digital document execution platform with end-to-end maker–checker workflows for banking clients.",
        highlights: [
            "Enabled fully digital loan execution by implementing an E-Execution portal, reducing manual document handling and approval turnaround time.",
            "Maker–checker workflow using Flowable BPMN across CAMU, CAD, and sanction stages",
            "Integrated SureEditor for loan checklist document editing with track changes",
            "DOCX execution, e-Stamp validation, and post-sign document download flow",
            "SSO integration using Keycloak with LDAP across multiple microservices",
            "Led editor integration and document comparison modules, contributing ~50% of overall SureSanction delivery and core business workflows.",
        ],
        tech: [
            "Java",
            "Spring Boot",
            "Flowable BPMN",
            "Thymeleaf",
            "Keycloak",
            "Apache POI",
            "Microservices",
            "DOCX Processing",
        ],
        status: "Live in Production",
        clients: ["Axis Bank", "SIB"],
    },
    {
        title: "SureConnect - In-House CRM",
        period: "Oct 2023",
        icon: Workflow,
        description: "Production support ticketing system with BPMN workflow for TAT tracking and issue resolution.",
        highlights: [
            "Flowable BPMN for process flow management",
            "Keycloak SSO integration",
            "TAT report generation with Apache POI",
            "Multi-level hierarchy support (PM → Tech Lead → Dev → Infra)",
        ],
        tech: ["Java", "Spring Boot", "Thymeleaf", "Flowable BPMN", "Keycloak", "MySQL"],
        status: "Live in Production",
        clients: ["Internal Use"],
    },
    {
        title: "BG Printing System",
        period: "2024",
        icon: Building2,
        description: "Bank Guarantee document printing and inventory management system for Axis Bank branches.",
        highlights: [
            "Phase-1 go-live under accelerated RBI timelines",
            "Nationwide branch manager helpline support",
            "10+ critical production issues resolved",
            "5+ change requests delivered",
        ],
        tech: ["Java", "Spring Boot", "Thymeleaf", "Oracle 19c"],
        status: "Live in Production",
        clients: ["Axis Bank"],
    },
    {
        title: "SureMatch-BG",
        period: "2024",
        icon: Server,
        description: "Bank Guarantee vetting platform with editor integration for document validation and verification.",
        highlights: [
            "50%+ ownership of editor integration",
            "POC conversion to production for 3 clients",
            "Document stamp validation",
            "Maker-checker workflow implementation",
        ],
        tech: ["Java", "Spring Boot", "Thymeleaf", "Oracle 19c"],
        status: "Live in Production",
        clients: ["Axis Bank", "SBI", "IndusInd Bank"],
    },
];

const ProjectsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    return (
        <section id="projects" className="py-4 md:py-32 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-indigo/5 to-background" />
            <div className="section-container relative">
                <motion.div ref={ref}>
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.2 }}
                            className="text-indigo-light font-mono text-sm mb-2"
                        >
                            What I&apos;ve Worked On
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3 }}
                            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                        >
                            Featured Projects
                        </motion.h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={isInView ? { scaleX: 1 } : {}}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="w-24 h-1 bg-gradient-to-r from-indigo to-purple mx-auto rounded-full"
                        />
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => {
                            const Icon = project.icon;
                            return (
                                <motion.div
                                    key={project.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                    className="glass-card p-6 glow-effect group flex flex-col h-full cursor-pointer"
                                    onClick={() => setSelectedProject(project)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" || e.key === " ") setSelectedProject(project);
                                    }}
                                >
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="p-3 rounded-lg bg-gradient-to-br from-indigo/20 to-purple/20 text-indigo-light group-hover:from-indigo/30 group-hover:to-purple/30 transition-colors">
                                            <Icon size={24} />
                                        </div>
                                        <span
                                            className={`px-2 py-1 text-xs font-medium rounded-full ${project.status === "Live in Production"
                                                    ? "bg-green-500/20 text-green-700"
                                                    : "bg-yellow-500/20 text-yellow-700"
                                                }`}
                                        >
                                            {project.status}
                                        </span>
                                    </div>

                                    {/* Title & Period */}
                                    <h3 className="text-lg font-bold text-foreground mb-1">{project.title}</h3>
                                    <p className="text-sm text-muted-foreground mb-3">{project.period}</p>

                                    {/* Description */}
                                    <p className="text-sm text-muted-foreground mb-4 flex-grow">{project.description}</p>

                                    {/* Clients */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.clients.map((client) => (
                                            <span
                                                key={client}
                                                className="flex items-center gap-1 px-2 py-1 text-xs bg-purple/10 text-purple rounded-full"
                                            >
                                                <Building2 size={10} />
                                                {client}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 text-xs font-mono bg-secondary/50 text-muted-foreground rounded"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>

            {/* Dialog for selected project */}
            {selectedProject && (
                <ProjectDialog open={true} onOpenChange={() => setSelectedProject(null)} project={selectedProject} />
            )}
        </section>
    );
};

export default ProjectsSection;
