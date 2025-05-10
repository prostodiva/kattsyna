import "../../index.css";
import { styles } from "../styles/index"
import {laptop} from "@/assets";

const Hero = ({ scrollContainer }) => {
    return (
        <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="w-full h-full animated-gradient"></div>
            </div>

                <div className="relative z-10 flex flex-row items-center w-4/5 mx-auto">
                    <div className="flex flex-col items-start mr-12">
                        <h1
                            className={styles.sectionText}
                            style={{
                                fontSize: "94px",
                                lineHeight: "80px",
                            }}
                        >
                            RITA <br /> KATTSYNA
                        </h1>
                    </div>

                <div
                    className="relative z-20 font-bold text-[14px] sm:text-[18px] md:text-[20px] 2xl:text-[24px] leading-[1.4] streaky-glow text-white"
                    style={{
                        fontFamily: 'sohne-var, "Helvetica Neue", Arial, sans-serif',
                        fontSize: "30px",
                        top: "20px",
                        left: "30%"
                    }}
                >
                           <p>Crafting efficient code <br /> that solves real-world problems.</p>
                    </div>

                    <div>
                        <img src={laptop} className="w-[800px] h-auto pt-10 -ml-14" alt="laptop" />
                    </div>
                </div>


        </section>

    );
};

export default Hero;