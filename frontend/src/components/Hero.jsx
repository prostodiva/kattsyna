import { useEffect } from 'react';
import "../../index.css";
import stars from '../assets/parallax/1Stars.svg';
import planets from '../assets/parallax/2Planets.svg';
import mountain1 from '../assets/parallax/3Mountain.svg';
import mountain2 from '../assets/parallax/4Mountain.svg';
import crater from '../assets/parallax/5Crater.svg';
import sun from '../assets/parallax/6Sun.svg';
import { setupParallax } from '../utils/parallax';
import Position from './Position';
import SpacemanCanvas from './Spaceman';

const Hero = ({ scrollContainer }) => {
    useEffect(() => {
        const cleanup = setupParallax();
        return cleanup;
    }, []);

    return (
        <section className="parallax">
            <div className="parallax__content absolute top-[10%] sm:top-[16%] lg:top-[24%] w-full mx-auto lg:pl-[38vh] lg:pr-[30vh] xl:pl-96 xl:pr-72 2xl:px-40 3xl:px-60 flex flex-col lg:flex-row items-start z-30">
                <div className="flex-1 lg:mb-0">
                    <h1 className="font-medium text-white text-[40px] xs:text-[50px] sm:text-[68px] md:text-[80px] lg:text-[100px] 2xl:text-[180px] leading-[110px] 2xl:leading-[160px]">
                        MARGARITA KATTSYNA
                    </h1>
                    <Position />
                </div>
                <div className="flex-1 flex justify-start lg:justify-end mt-4 sm:mt-14 ml-8 xs:ml-[-4vh] sm:ml-[-17vh] md:ml-[-26vh] lg:mt-10 2xl:mt-0">
                    <div className="font-bold text-[20px] sm:text-[30px] md:text-[36px] 2xl:text-[46px] sm:leading-[40px] md:leading-[50px] 2xl:leading-[60px] streaky-glow max-w-sm 2xl:max-w-lg text-white text-left">
                        I love crafting <br /> captivating experiences for the digital world to savor.
                    </div>
                </div>
            </div>

            <img className="parallax__stars" src={stars} alt="" />
            <img className="parallax__planets" src={planets} alt="" />
            <img className="parallax__mountain1" src={mountain1} alt="" />
            <img className="parallax__mountain2" src={mountain2} alt="" />
            <img className="parallax__crater" src={crater} alt="" />
            <img className="parallax__sun" src={sun} alt="" />

            <div className="absolute inset-0 w-full h-full" style={{ zIndex: 20 }}>
                <SpacemanCanvas scrollContainer={scrollContainer} />
            </div>
        </section>
    );
};

export default Hero;