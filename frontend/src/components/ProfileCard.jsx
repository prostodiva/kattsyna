import React from "react";

const ProfileCard = ({ image, name, email }) => {
    return (
        <div className="bg-secondary h-32 w-64 sm:h-40 sm:w-72 md:h-48 md:w-80 lg:h-60 lg:w-60 rounded-2xl flex flex-col items-center justify-center shadow-md hover:shadow-2xl hover:shadow-purple-800 hover:-translate-y-2 transition-all duration-300">
            <div className="mb-1 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-red-500">{image}</div>
            <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2 text-center">{name}</h3>
            <p className="text-gray-300 text-xs sm:text-sm text-center px-2">{email}</p>
        </div>
    );
};

export default ProfileCard;