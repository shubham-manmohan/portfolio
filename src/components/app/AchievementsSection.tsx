"use client";

import Image from "next/image";
import TrainingSection from "./TrainingSection";

const achievements = [
    {
        src: "/images/achievements/Shubham_Manmohan_Mar-2023.png",
        title: "Star Performer - March 2023",
    },
    {
        src: "/images/achievements/Shubham_Manmohan_April-2024.png",
        title: "Star Performer - April 2024",
    },
    {
        src: "/images/achievements/Shubham_Manmohan_May-2024.png",
        title: "Star Performer - May 2024",
    },
    {
        src: "/images/achievements/Shubham_Manmohan_April-2025.png",
        title: "Star Performer - April 2025",
    },
];

export default function AchievementsSection() {
    return (
        <section id="achievements" className="py-8 bg-gradient-to-r from-indigo-light/5 via-purple-light/5 to-indigo-light/5">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Achievements & Recognition
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {achievements.map((item, index) => (
                        <div
                            key={index}
                            className="bg-background rounded-lg shadow-md p-4 text-center hover:scale-105 transition"
                        >
                            <Image
                                src={item.src}
                                alt={item.title}
                                width={300}
                                height={300}
                                className="rounded-md mb-4"
                            />
                            <p className="font-medium">{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
            <TrainingSection />
        </section>
    );
}
