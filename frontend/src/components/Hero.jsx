import "../../index.css";
import { styles } from "../styles/index"
import LaptopCanvas from "../components/LaptopModel";


const Hero = ({ scrollContainer }) => {
    return (
        <section className="relative w-full h-[60vh] flex items-center justify-center">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="w-full h-full animated-gradient"></div>
            </div>

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
                        RITA <br /> KATTSYNA
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

                <div className="pt-56"
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