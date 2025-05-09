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
        <div className='relative z-0 bg-primary'>
            <div className='wrapper' ref={wrapperRef}>
                <section id="navbar" className="z-10">
                    <NavBar />
                </section>
                <section id="hero" className='z-10'>
                    <Hero scrollContainer={wrapperRef} />
                </section>
                <section id="portfolio" className='relative z-20 bg-primary mt-[-2px]'>
                    <Portfolio />
                </section>
                <section id="experience" className='relative z-30 bg-primary mt-[-2px]'>
                    <Experience />
                </section>
                <section id="skills" className='relative z-30 bg-primary mt-[-2px]'>
                    <SkillsSection />
                </section>
                <section id="contact" className='relative z-40 bg-primary'>
                    <Contact />
                </section>
            </div>
        </div>
    );
};

export default HomePage;