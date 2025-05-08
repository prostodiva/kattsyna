import React from 'react';

const produceSpans = (text, animation) => {
    return text.split("").map((letter, index) => (
        <span
            key={index}
            className={`inline-block transform-style-3d origin-bottom ${animation}`}
            style={{ animationDelay: `${index * 0.06}s` }}
        >
            {letter === " " ? "\u00A0" : letter}
        </span>
    ));
};

const Position = () => {
    return (
        <div className="relative cursor-default font-medium text-white text-[12px] xs:text-[14px] sm:text-[16px] md:text-[20px] 2xl:text-[32px] leading-[24px] 2xl:leading-[36px] w-full h-[80px] sm:h-[100px] md:h-[120px] flex justify-center items-center z-50">
            <div className="relative flex flex-col items-center justify-center w-full h-full">
                <div className="text first relative flex justify-center w-full z-50" aria-label="Full-Stack Developer">
                    {produceSpans("Full-Stack Developer", "animate-textRotate1")}
                </div>
                <div className="text second relative flex justify-center w-full z-50" aria-label="Software Engineer">
                    {produceSpans("Software Engineer", "animate-textRotate2")}
                </div>
            </div>
        </div>
    );
};

export default Position;