import "../../index.css";
import LaptopCanvas from "../components/LaptopModel";
import { styles } from "../styles/index";


const Hero = ({ scrollContainer }) => {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-primary">
            <div className="absolute inset-0 w-full h-full animated-gradient z-0"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center w-4/5 mx-auto">
                <div className="flex flex-col items-center lg:items-start flex-1 lg:mr-12 mb-8 lg:mb-0">
                    <h1 className={`${styles.sectionText} text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[94px] leading-tight sm:leading-[80px] lg:-mt-48 -mt-20 text-center lg:text-left`}>
                        MARGARITA <br /> KATTSYNA
                    </h1>
                    <div className="relative z-20 font-bold text-base sm:text-lg md:text-xl 2xl:text-2xl leading-[1.4] streaky-glow text-white mt-4 sm:mt-6 font-sans text-center lg:text-left">
                        <p>Crafting efficient code <br /> that solves real-world problems.</p>
                    </div>
                </div>

                <div className="relative flex-1 h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[750px] w-full">
                    <LaptopCanvas scrollContainer={scrollContainer} />
                </div>
            </div>
        </section>
    );
};

export default Hero;