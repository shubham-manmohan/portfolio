"use client";

import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import ExperienceSection from "./ExperienceSection";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Navigation from "./Navigation";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";

export default function RootWrapper() {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <main>
                <HeroSection />
                <AboutSection />
                <ExperienceSection />
                <ProjectsSection />
                <SkillsSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
}
