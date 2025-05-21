import Footer from "@/components/Footer";
import { useRef } from "react";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Portfolio from "../components/Portfolio";
import SkillsSection from "../components/SkillsSection";

const HomePage = () => {
    const wrapperRef = useRef(null);

    return (
        <div className="relative z-0 min-h-screen">
            <div className="absolute inset-0 w-full h-full -z-10" />
            <section id="navbar" className="fixed top-0 left-0 right-0 z-50 bg-transparent">
                <NavBar />
            </section>
            <div className='relative pt-[80px]'>
                <section id="hero" className='relative bg-primary'>
                    <Hero scrollContainer={wrapperRef} />
                </section>
                <section id="portfolio" className='relative z-10 bg-primary'>
                    <Portfolio />
                </section>
                <section id="experience" className='relative z-10 bg-primary'>
                    <Experience />
                </section>
                <section id="skills" className='relative z-10 bg-primary'>
                    <SkillsSection />
                </section>
                <section id="contact" className='relative z-10 bg-primary'>
                    <Contact />
                </section>
                <section id="footer" className='relative z-10 bg-secondary'>
                    <Footer />
                </section>
            </div>
        </div>
    );
};

export default HomePage;