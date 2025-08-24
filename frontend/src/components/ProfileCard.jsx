import React from "react";

const ProfileCard = ({ image, name, email }) => {
    return (
        <div className="bg-secondary h-60 w-60 rounded-2xl flex flex-col items-center justify-center shadow-md  hover:shadow-2xl hover:shadow-purple-800  hover:-translate-y-2 transition-all duration-300">
            <div className="mb-1 text-4xl text-red-500">{image}</div>
            <h3 className="text-white text-xl font-bold mb-2">{name}</h3>
            <p className="text-gray-300 text-sm">{email}</p>
        </div>
    );
};

export default ProfileCard;