import React from 'react';
import LandingVideo from "@/app/(home)/components/Landing/LandingVideo";
import LandingContent from "@/app/(home)/components/Landing/LandingContent";

const Landing = () => {
    return (
        <section className="relative text-white">
            <LandingVideo />
            <LandingContent />
        </section>
    );
};

export default Landing;