import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Portfolio from "../components/Portfolio";
import {useRef} from "react";

const HomePage = () => {
    const wrapperRef = useRef(null);

    return (
        <div className='relative z-0 bg-primary'>

            <div className='wrapper' ref={wrapperRef}>
                <div id="hero" className='z-10'>
                    <Hero scrollContainer={wrapperRef} />
                </div>
                <div id="portfolio" className='relative z-30 bg-primary mt-[-2px]'>
                    <Portfolio />
                </div>
                <div id="experience" className='relative z-30 bg-primary'>
                    <Experience />
                </div>
                <div id="contact" className='relative z-30 bg-primary'>
                    <Contact />
                </div>
            </div>
        </div>

    );
};

export default HomePage;