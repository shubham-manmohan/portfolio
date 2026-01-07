import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, GitBranch, Globe, Server, Shield, Workflow } from "lucide-react";

const skillCategories = [
    {
        title: "Languages",
        icon: Code2,
        skills: ["Java", "JavaScript", "TypeScript", "SQL", "HTML", "CSS", "Python"],
    },
    {
        title: "Frameworks & Libraries",
        icon: Server,
        skills: ["Spring Boot", "React", "Hibernate", "Thymeleaf", "Apache POI", "JSoup"],
    },
    {
        title: "Databases",
        icon: Database,
        skills: ["Oracle 19c", "MySQL"],
    },
    {
        title: "Workflow & Integration",
        icon: Workflow,
        skills: ["Flowable BPMN", "Keycloak", "OAuth", "SSO/LDAP", "WebServices", "REST APIs"],
    },
    {
        title: "Architecture",
        icon: Globe,
        skills: ["Microservices", "Monolithic", "Event-Driven", "MVC"],
    },
    {
        title: "Tools & DevOps",
        icon: GitBranch,
        skills: ["Git", "Postman", "M.S Graph SDK", "Maven"],
    },
];

const SkillsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="skills" className="py-4 md:py-32 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-purple/5 to-background" />

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
                            Technical Expertise
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3 }}
                            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                        >
                            Skills & Technologies
                        </motion.h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={isInView ? { scaleX: 1 } : {}}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="w-24 h-1 bg-gradient-to-r from-indigo to-purple mx-auto rounded-full"
                        />
                    </div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {skillCategories.map((category, index) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.4 + index * 0.1 }}
                                className="glass-card p-6 glow-effect group"
                            >
                                {/* Category Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-gradient-to-br from-indigo/20 to-purple/20 text-indigo-light group-hover:from-indigo/30 group-hover:to-purple/30 transition-colors">
                                        <category.icon size={20} />
                                    </div>
                                    <h3 className="text-foreground font-semibold">{category.title}</h3>
                                </div>

                                {/* Skills Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.span
                                            key={skill}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                            transition={{ delay: 0.5 + index * 0.1 + skillIndex * 0.05 }}
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            className="px-3 py-1.5 text-sm bg-secondary/50 text-muted-foreground rounded-lg hover:bg-secondary hover:text-foreground transition-colors cursor-default"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.8 }}
                        className="mt-16 max-w-2xl mx-auto"
                    >
                        <div className="glass-card p-6 text-center">
                            <div className="inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-br from-indigo/20 to-purple/20 text-indigo-light mb-4">
                                <Shield size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-2">Education</h3>
                            <p className="text-lg text-indigo-light font-medium">B.Tech in Computer Science & Engineering</p>
                            <p className="text-muted-foreground">RGPV Bhopal, India</p>
                            <p className="text-sm text-muted-foreground mt-1">Aug 2019 – May 2023</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsSection;
