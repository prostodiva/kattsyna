import "../../index.css";
import { styles } from "../styles/index"

const Hero = ({ scrollContainer }) => {
    return (
        <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="w-full h-full diagonal-gradient"></div>
            </div>
            <div className="animated-gradient">
                <div className="w-full lg:w-1/2">
                    <h1 className={styles.sectionText}
                    style={{
                        marginLeft: "150px",
                        marginTop: "150px"
                    }}>
                        RITA <br /> KATTSYNA
                    </h1>
                </div>
                <div>
                    <div className="font-bold text-[14px] sm:text-[18px] md:text-[20px] 2xl:text-[24px] leading-[1.4] streaky-glow text-white -mt-48 sm:-mt-56 -ml-4 sm:-ml-8"
                         style={{
                             fontFamily: 'sohne-var, "Helvetica Neue", Arial, sans-serif',
                             fontSize: "20px",
                             marginLeft: "250px",
                             top: "220px"
                         }}
                    >
                       <p>Crafting efficient code <br /> that solves real-world problems.</p>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Hero;