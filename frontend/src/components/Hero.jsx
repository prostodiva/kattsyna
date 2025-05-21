import "../../index.css";
import LaptopCanvas from "../components/LaptopModel";
import { styles } from "../styles/index";


const Hero = ({ scrollContainer }) => {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-primary">
            <div className="absolute inset-0 w-full h-full animated-gradient z-0"></div>

            <div className="relative z-10 flex flex-row items-center w-4/5 mx-auto">
                    <div className="flex flex-col items-start mr-12">
                        <h1
                            className={`
                                    ${styles.sectionText}
                                    text-4xl
                                    sm:text-5xl
                                    md:text-6xl
                                    lg:text-7xl
                                    xl:text-[94px]
                                    leading-tight
                                    sm:leading-[80px]
                                  `}
                        >
                            MARGARITA <br /> KATTSYNA
                        </h1>
                        <div
                            className="
                                    relative z-20 font-bold
                                    text-base
                                    sm:text-lg
                                    md:text-xl
                                    2xl:text-2xl
                                    leading-[1.4]
                                    streaky-glow text-white
                                    mt-4
                                    sm:mt-6
                                    font-sans"
                            style={{
                                fontFamily: 'sohne-var, "Helvetica Neue", Arial, sans-serif',
                            }}
                        >
                            <p>Crafting efficient code <br /> that solves real-world problems.</p>
                        </div>
                    </div>

                <div
                    className="relative w-[90vw] max-w-[350px] h-[200px] sm:w-[500px] sm:h-[400px] md:w-[700px] md:h-[500px] lg:w-[950px] lg:h-[750px]">
                        <LaptopCanvas scrollContainer={scrollContainer} />
                    </div>
            </div>
        </section>
    );
};

export default Hero;