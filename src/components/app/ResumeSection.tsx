"use client";

import Image from "next/image";

export default function ResumeSection() {
    return (
        <section id="resume" className="py-4">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-8">Resume</h2>

                {/* Resume Preview */}
                <div className="flex justify-center mb-8">
                    <Image
                        src="/images/Shubham_Manmohan_Full_Stack.png"
                        alt="Shubham Manmohan Resume"
                        width={600}
                        height={850}
                        className="rounded-lg shadow-lg"
                    />
                </div>

                {/* Download Button */}
                <a
                    href="/resume/Shubham_Manmohan_Full_Stack.pdf"
                    download
                    className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
                >
                    Download Resume (PDF)
                </a>
            </div>
        </section>
    );
}
