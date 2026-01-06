import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const HeroSection = () => {
    const scrollToAbout = () => {
        const element = document.querySelector("#about");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy via-background to-background">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--indigo)/0.15)_0%,_transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(var(--purple)/0.1)_0%,_transparent_50%)]" />

                {/* Floating Orbs */}
                <motion.div
                    className="absolute top-1/4 right-1/4 w-64 h-64 bg-indigo/20 rounded-full blur-3xl"
                    animate={{
                        y: [0, -30, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple/10 rounded-full blur-3xl"
                    animate={{
                        y: [0, 20, 0],
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            <div className="relative section-container py-20">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Greeting */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-indigo-light font-mono text-sm md:text-base mb-4"
                    >
                        Hello, I&apos;m
                    </motion.p>

                    {/* Name with Signature Font */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="font-signature text-5xl sm:text-6xl md:text-7xl lg:text-8xl gradient-text mb-6"
                    >
                        Shubham Manmohan
                    </motion.h1>

                    {/* Title */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-4"
                    >
                        Software Engineer
                    </motion.h2>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-4"
                    >
                        Full Stack Developer specializing in Enterprise Banking Solutions,
                        Flowable BPMN Workflows, and Document Processing Systems
                    </motion.p>

                    {/* Location */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex items-center justify-center gap-2 text-muted-foreground mb-4"
                    >
                        <MapPin size={16} className="text-indigo-light" />
                        <span>Mumbai, India</span>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex items-center justify-center gap-4 mb-4"
                    >
                        {[
                            { icon: Mail, href: "mailto:shubhammanmohan16@gmail.com", label: "Email" },
                            { icon: Phone, href: "tel:+918239673870", label: "Phone" },
                            { icon: Linkedin, href: "https://linkedin.com/in/shubhammanmohan", label: "LinkedIn" },
                            { icon: Github, href: "https://github.com/shubhammanmohan", label: "GitHub" },
                        ].map((social, index) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target={social.href.startsWith("http") ? "_blank" : undefined}
                                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                className="p-3 rounded-full bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-all glow-effect"
                                whileHover={{ scale: 1.1, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                            >
                                <social.icon size={20} />
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <motion.a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="px-8 py-3 bg-gradient-to-r from-indigo to-purple text-primary-foreground font-medium rounded-lg glow-effect"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get in Touch
                        </motion.a>
                        <motion.a
                            href="#projects"
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="px-8 py-3 bg-secondary/50 text-foreground font-medium rounded-lg border border-border/50 hover:bg-secondary transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View Projects
                        </motion.a>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.button
                    onClick={scrollToAbout}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{
                        opacity: { delay: 1, duration: 0.5 },
                        y: { delay: 1, duration: 2, repeat: Infinity },
                    }}
                >
                    <ChevronDown size={32} />
                </motion.button>
            </div>
        </section>
    );
};

export default HeroSection;
