"use client";

import AboutSection from "./AboutSection";
import AchievementsSection from "./AchievementsSection";
import ContactSection from "./ContactSection";
import ExperienceSection from "./ExperienceSection";
import Footer from "./Footer";
import HeroSectionWrapper from "./HeroSecrionWrapper";
// import HeroSection from "./HeroSection";
import Navigation from "./Navigation";
import ProjectsSection from "./ProjectsSection";
import ResumeSection from "./ResumeSection";
import SkillsSection from "./SkillsSection";

export default function RootWrapper() {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <main>
                <HeroSectionWrapper />
                {/* <HeroSection /> */}
                <AboutSection />
                <ExperienceSection />
                <AchievementsSection />
                <ProjectsSection />
                <SkillsSection />
                <ResumeSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
}
