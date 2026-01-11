import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Calendar, ChevronRight } from "lucide-react";

const experiences = [
    {
        title: "Software Engineer",
        company: "Impactsure Technologies",
        team: "Trade Platform Team",
        location: "Mumbai, IN",
        period: "Dec 2025 – Present",
        products: ["Trade Platform"],
        highlights: [
            "Leading development of a full Trade Platform with consultants; supporting POCs and demos for Tier-1 Indian banks and other public and private sector banks",
            "Designed the first corporate client-facing React UI framework with reusable components for 8+ trade services (IRM, ORM, Import/Export Finance, EDPMS, SOFTEX, BG)",
            "Implemented Flowable BPMN-based maker-checker workflows across all trade services, managing approval and audit flows",
        ],
        isCurrent: true,
    },
    {
        title: "Associate Software Engineer",
        company: "Impactsure Technologies",
        team: "Code Excellence Team",
        location: "Mumbai, IN",
        period: "July 2023 – Nov 2025",
        products: ["SureConnect", "SureEditor", "SureSanction", "BG Printing", "SureMatch-BG"],
        highlights: [
            "Built BPMN-based workflows, secure authentication, and document processing features for enterprise banking systems",
            "Integrated editor and document comparison capabilities into multiple platforms (SureSanction, BG Printing, and SureMatch-BG) deployed across Tier-1 Indian banks",
            "Implemented enterprise SSO using Keycloak with LDAP for secure authentication across microservices",
            "Served as Technical Lead for BG Printing Phase-1 production go-live; led a 5-member team, resolved 10+ critical production issues, and earned Star Team of the Month",
            "Led multiple POCs and supported their transition into production deployments for public and private sector banks",
        ],
        achievement: "Star Team of the Month",
    },
    {
        title: "Software Engineer Intern",
        company: "Impactsure Technologies",
        team: "Production Support",
        location: "Mumbai, IN",
        period: "Jan 2023 – June 2023",
        products: ["CRM", "SureLogistics", "SurePlan"],
        highlights: [
            "Provided production support for a large lighting manufacturing client, resolving 25+ bugs and implementing 20+ change requests across live systems",
            "Built multi-vendor RPA-based shipment tracking, reducing manual tracking effort by 60%",
            "Delivered CRM enhancements with mandatory field validations across multiple live applications",
            "Integrated SurePlan with Tally ERP to sync inventory and track finished goods from BOM to production line",
        ],
    },

];


const ExperienceSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="experience" className="py-4 md:py-32 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-navy/5 to-background" />

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
                            Career Journey
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3 }}
                            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                        >
                            Work Experience
                        </motion.h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={isInView ? { scaleX: 1 } : {}}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="w-24 h-1 bg-gradient-to-r from-indigo to-purple mx-auto rounded-full"
                        />
                    </div>

                    {/* Timeline */}
                    <div className="relative max-w-7xl mx-auto">
                        {/* Timeline Line */}
                        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo via-purple to-transparent transform md:-translate-x-1/2" />

                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.period}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.4 + index * 0.2 }}
                                className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%]"
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className={`absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-indigo to-purple transform -translate-x-1/2 ${exp.isCurrent ? "ring-4 ring-indigo/30 animate-pulse-glow" : ""
                                    }`} />

                                {/* Content Card */}
                                <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                                    <div className="glass-card p-6 glow-effect">
                                        {/* Header */}
                                        <div className={`flex flex-wrap items-center gap-2 mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                                            {exp.isCurrent && (
                                                <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-indigo to-purple text-primary-foreground rounded-full">
                                                    Current
                                                </span>
                                            )}
                                            {exp.achievement && (
                                                <span className="flex items-center gap-1 px-2 py-1 text-xs font-medium bg-purple/20 text-purple-light rounded-full">
                                                    <Award size={12} />
                                                    {exp.achievement}
                                                </span>
                                            )}
                                        </div>

                                        <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                                        <p className="text-indigo-light font-medium mb-1">{exp.company}</p>
                                        <p className="text-muted-foreground text-sm mb-2">{exp.team}</p>

                                        <div className={`flex items-center gap-4 text-sm text-muted-foreground mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                                            <span className="flex items-center gap-1">
                                                <Calendar size={14} />
                                                {exp.period}
                                            </span>
                                        </div>

                                        {/* Products */}
                                        <div className={`flex flex-wrap gap-2 mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                                            {exp.products.map((product) => (
                                                <span
                                                    key={product}
                                                    className="px-2 py-1 text-xs font-mono bg-secondary/50 text-muted-foreground rounded"
                                                >
                                                    {product}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Highlights */}
                                        <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-left" : ""}`}>
                                            {exp.highlights.map((highlight, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                    <ChevronRight size={16} className="flex-shrink-0 mt-0.5 text-indigo-light" />
                                                    <span>{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ExperienceSection;
