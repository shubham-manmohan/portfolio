import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Code2, Database, Workflow } from "lucide-react";

const highlights = [
    {
        icon: Building2,
        title: "Enterprise Banking",
        description: "Played a key role in building and supporting production systems used by SBI, Axis Bank, and SIB",
    },
    {
        icon: Workflow,
        title: "BPMN Workflows",
        description: "Expert in Flowable V6 for complex maker-checker workflows",
    },
    {
        icon: Code2,
        title: "Full Stack Development",
        description: "Java, Spring Boot, React, TypeScript expertise",
    },
    {
        icon: Database,
        title: "Document Processing",
        description: "Rich-text document editor supporting DOCX upload, in-browser editing, and bidirectional DOCX ↔ HTML ↔ PDF conversion with ~90% accuracy",
    },
];

const AboutSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="py-4 md:py-32 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />

            <div className="section-container relative">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="max-w-7xl mx-auto"
                >
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.2 }}
                            className="text-indigo-light font-mono text-sm mb-2"
                        >
                            About Me
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3 }}
                            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                        >
                            Building Enterprise Solutions
                        </motion.h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={isInView ? { scaleX: 1 } : {}}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="w-24 h-1 bg-gradient-to-r from-indigo to-purple mx-auto rounded-full"
                        />
                    </div>

                    {/* About Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.4 }}
                        className="glass-card p-6 md:p-8 mb-12"
                    >
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            I&apos;m a <span className="text-foreground font-medium">Software Engineer</span> at Impactsure Technologies
                            with over 3+ years of experience building enterprise-grade banking solutions. I specialize in developing
                            complex document processing systems, BPMN-based workflows, and full-stack applications that serve
                            major banking institutions across India.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            My journey includes building <span className="text-indigo-light">SureEditor</span> - an in-house DOCX editor
                            that replaced commercial solutions saving significant licensing costs, implementing
                            <span className="text-indigo-light"> enterprise SSO with Keycloak</span>, and leading critical production
                            deployments for Axis Bank under tight regulatory and delivery deadlines.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Currently, I&apos;m leading the development of a comprehensive <span className="text-purple-light">Trade Platform</span> with
                            8+ microservices, designing the first corporate client-facing React UI framework for the company, and
                            working on POCs for HDFC Bank and other major financial institutions.
                        </p>
                    </motion.div>

                    {/* Highlights Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.5 + index * 0.1 }}
                                className="glass-card p-6 glow-effect group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-gradient-to-br from-indigo/20 to-purple/20 text-indigo-light group-hover:from-indigo/30 group-hover:to-purple/30 transition-colors">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-foreground font-semibold mb-1">{item.title}</h3>
                                        <p className="text-muted-foreground text-sm">{item.description}</p>
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

export default AboutSection;
