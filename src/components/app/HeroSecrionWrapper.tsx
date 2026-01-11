import Image from "next/image";
import HeroSection from "./HeroSection";

export default function HeroSectionWrapper() {
    return (
        <div className="flex flex-col md:flex-row min-h-screen items-center">
            {/* Left side - HeroSection - 100% width on mobile, 75% on md+ */}
            <div className="w-full md:w-3/4 md:mb-0">
                <HeroSection />
            </div>

            {/* Right side - Profile Image with gradient border */}
            <div className="w-full md:w-1/4 flex justify-center">
                <div
                    className="p-1 rounded-full cursor-pointer"
                    style={{
                        background: `linear-gradient(135deg, hsla(210, 71%, 76%, 1.00) 0%,hsla(236, 97%, 89%, 1.00) 30%,hsla(226, 90%, 93%, 1.00) 60%, hsla(269, 79%, 85%, 1.00)) 100%`,
                    }}
                >
                    <Image
                        src="/images/shubhammanmohan_profile.jpg"
                        alt="Shubham Manmohan"
                        width={250}
                        height={250}
                        className="rounded-full object-cover block"
                        priority
                    />
                </div>
            </div>
        </div>
    );
}
