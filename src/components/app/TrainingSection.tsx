// components/app/TrainingSection.tsx
"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, Star } from "lucide-react";

export default function TrainingSection() {
    return (
        <section
            id="training"
            className="relative py-16"
        >
            <div className="section-container max-w-6xl mx-auto text-center">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                        Technical Training & Mentorship
                    </h2>
                    <p className="mt-2 text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                        Selected by management to conduct technical onboarding and advanced training sessions on Java, Spring Boot, Flowable BPMN, and Microservices.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Card 1 */}
                    <motion.div
                        className="flex-1 relative group bg-background/70 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo/20 via-purple/20 to-indigo/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>

                        <div className="relative p-8 flex flex-col items-center text-center h-full">
                            <BookOpen className="text-indigo-light w-12 h-12 mb-4" />
                            <h3 className="font-semibold text-lg mb-2">Enterprise Tech Training</h3>
                            <p className="text-muted-foreground text-sm">
                                Delivered in-depth sessions on Java, Spring Boot, Flowable BPMN workflows, and Microservices architecture.
                                Focused on practical examples, live coding exercises, and real-world enterprise scenarios.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        className="flex-1 relative group bg-background/70 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple/20 via-indigo/20 to-purple/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>

                        <div className="relative p-8 flex flex-col items-center text-center h-full">
                            <Users className="text-purple w-12 h-12 mb-4" />
                            <h3 className="font-semibold text-lg mb-2">Onboarding & Mentorship</h3>
                            <p className="text-muted-foreground text-sm">
                                Guided new joiners through enterprise banking solutions, workflow automation, and BPMN implementation.
                                Ensured participants could quickly implement concepts into real project scenarios with confidence.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        className="flex-1 relative group bg-background/70 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo/20 via-purple/20 to-indigo/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>

                        <div className="relative p-8 flex flex-col items-center text-center h-full">
                            <Star className="text-indigo w-12 h-12 mb-4" />
                            <h3 className="font-semibold text-lg mb-2">Recognition & Selection</h3>
                            <p className="text-muted-foreground text-sm">
                                Chosen by management for multiple years due to the ability to translate complex technical topics into actionable knowledge for new team members.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
