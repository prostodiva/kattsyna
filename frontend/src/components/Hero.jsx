import "../../index.css";
import Position from './Position';

import bg from '../assets/parallax/back.svg';

const Hero = ({ scrollContainer }) => {
    return (
        <section className="parallax">
            <div className="parallax__content w-full z-30">
                <div className="w-full lg:w-1/2">
                    <h1 className='parallax__content_h1 font-bold text-white text-[32px] md:text-[64px] 2xl:text-[96px] leading-tight'>
                        RITA <br /> KATTSYNA
                    </h1>
                    <div>
                        <Position />
                    </div>
                </div>
                <div>
                    <div className="parallax__content_p font-bold text-[14px] sm:text-[18px] md:text-[20px] 2xl:text-[24px] leading-[1.4] streaky-glow text-white -mt-48 sm:-mt-56 -ml-4 sm:-ml-8">
                       <p>Crafting efficient code <br /> that solves real-world problems.</p>
                    </div>
                </div>
            </div>
            <img className="parallax__bg" src={bg} alt="" />
        </section>

    );
};

export default Hero;