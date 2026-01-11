import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer className="py-8 border-t border-border/50 bg-background">
            <div className="section-container">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Signature */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="fasthand-regular text-2xl gradient-text"
                    >
                        shubham manmohan
                    </motion.p>


                    {/* Year */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-sm text-muted-foreground"
                    >
                        © {new Date().getFullYear()} All rights reserved.
                    </motion.p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
