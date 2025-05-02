import { useRef } from "react";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";

const HomePage = () => {
    const wrapperRef = useRef(null);

    return (
        <div className='relative z-0 bg-primary'>
            <div className='wrapper' ref={wrapperRef}>
                <section id="hero" className='z-10'>
                    <Hero scrollContainer={wrapperRef} />
                </section>
                <section id="portfolio" className='relative z-30 bg-primary mt-[-2px]'>
                    <Portfolio />
                </section>
                <section id="experience" className='relative z-30 bg-primary'>
                    <Experience />
                </section>
                <section id="contact" className='relative z-30 bg-primary'>
                    <Contact />
                </section>
            </div>
        </div>
    );
};

export default HomePage;