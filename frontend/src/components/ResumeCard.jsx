import React from "react";

const ResumeCard = ({ title }) => {
    return (
        <div className="bg-secondary h-32 w-64 sm:h-40 sm:w-72 md:h-48 md:w-80 lg:h-60 lg:w-60 rounded-2xl flex flex-col items-center justify-center shadow-md hover:shadow-2xl hover:shadow-purple-800 hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold text-center px-2">{title}</h3>
        </div>
    );
};

export default ResumeCard;