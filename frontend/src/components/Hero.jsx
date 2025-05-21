import "../../index.css";
import LaptopCanvas from "../components/LaptopModel";
import { styles } from "../styles/index";


const Hero = ({ scrollContainer }) => {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center bg-transparent">
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

                    <div className="relative"
                        style={{
                            width: "950px",
                            height: "750px"
                    }}>
                        <LaptopCanvas scrollContainer={scrollContainer} />
                    </div>
            </div>
        </section>
    );
};

export default Hero;