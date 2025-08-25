import React from "react";

const ResumeCard = ({ title }) => {
    return (
        <div className="bg-secondary h-48 w-full sm:h-60 sm:w-60 rounded-2xl flex flex-col items-center justify-center shadow-md hover:shadow-2xl hover:shadow-purple-800 hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-white text-lg sm:text-xl font-bold mb-1 text-center px-2">{title}</h3>
        </div>
    );
};

export default ResumeCard;