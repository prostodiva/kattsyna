import { setupParallax } from '@/utils/parallax';
import { useEffect } from 'react';
import "../../index.css";
import Position from './Position';

import bg from '../assets/parallax/back.svg';
import floor from '../assets/parallax/floor.svg';

const Hero = ({ scrollContainer }) => {
    useEffect(() => {
        const cleanup = setupParallax();
        return cleanup;
    }, []);

    return (
        <section className="parallax">
            <div className="parallax__content absolute top-[10%] sm:top-[16%] lg:top-[24%] w-full z-30">
                <div className="w-full lg:w-1/2">
                    <h1 className='font-medium text-white text-[40px] xs:text-[50px] sm:text-[68px] md:text-[80px] lg:text-[100px] 2xl:text-[180px] leading-[110px] 2xl:leading-[160px]'>
                        RITA <br /> KATTSYNA
                    </h1>
                    <Position />
                </div>
                <div>
                    <div className="font-bold text-[14px] sm:text-[18px] md:text-[20px] 2xl:text-[24px] leading-[1.4] streaky-glow text-white -mt-48 sm:-mt-56 -ml-4 sm:-ml-8">
                       <p>Crafting efficient code <br /> that solves real-world problems.</p>
                    </div>
                </div>
            </div>
            <img className="parallax__bg" src={bg} alt="" />
            <img className="parallax__floor" src={floor} alt="" />

        </section>
    );
};

export default Hero;