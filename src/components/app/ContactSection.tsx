import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "shubhammanmohan16@gmail.com",
        href: "mailto:shubhammanmohan16@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+91 82396 73870",
        href: "tel:+918239673870",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Mumbai, India",
        href: null,
    },
];

const socialLinks = [
    {
        icon: Linkedin,
        label: "LinkedIn",
        href: "https://linkedin.com/in/shubham-manmohan",
    },
    {
        icon: Github,
        label: "GitHub",
        href: "https://github.com/shubham-manmohan",
    },
];

const ContactSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="contact" className="py-20 md:py-32 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-navy/10 to-background" />

            <div className="section-container relative">
                <motion.div ref={ref} className="max-w-4xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.2 }}
                            className="text-indigo-light font-mono text-sm mb-2"
                        >
                            Get in Touch
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3 }}
                            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                        >
                            Let&apos;s Connect
                        </motion.h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={isInView ? { scaleX: 1 } : {}}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="w-24 h-1 bg-gradient-to-r from-indigo to-purple mx-auto rounded-full mb-6"
                        />
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.5 }}
                            className="text-muted-foreground max-w-2xl mx-auto"
                        >
                            I&apos;m always interested in hearing about new opportunities, discussing enterprise solutions,
                            or collaborating on exciting projects. Feel free to reach out!
                        </motion.p>
                    </div>

                    {/* Contact Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {contactInfo.map((item, index) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.5 + index * 0.1 }}
                            >
                                {item.href ? (
                                    <a
                                        href={item.href}
                                        className="block glass-card p-6 text-center glow-effect group transition-transform hover:-translate-y-1"
                                    >
                                        <div className="inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-br from-indigo/20 to-purple/20 text-indigo-light group-hover:from-indigo/30 group-hover:to-purple/30 transition-colors mb-4">
                                            <item.icon size={24} />
                                        </div>
                                        <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                                        <p className="text-foreground text-sm">{item.value}</p>
                                    </a>
                                ) : (
                                    <div className="glass-card p-6 text-center">
                                        <div className="inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-br from-indigo/20 to-purple/20 text-indigo-light mb-4">
                                            <item.icon size={24} />
                                        </div>
                                        <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                                        <p className="text-foreground text-sm">{item.value}</p>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.8 }}
                        className="flex justify-center gap-4 mb-12"
                    >
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={`${social.label}-${index}`}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 glass-card glow-effect text-muted-foreground hover:text-foreground transition-colors"
                                whileHover={{ scale: 1.05, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <social.icon size={20} />
                                <span className="font-medium">{social.label}</span>
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.9 }}
                        className="text-center"
                    >
                        <motion.a
                            href="mailto:shubhammanmohan16@gmail.com"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo to-purple text-primary-foreground font-semibold rounded-xl glow-effect"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Send size={20} />
                            Send me an email
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;
