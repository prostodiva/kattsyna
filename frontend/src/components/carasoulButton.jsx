import React from "react";
import {rightArrow, leftArrow} from "@/assets";

export const RightButton = ({ onClick }) => {
    return (
        <button onClick={onClick}>
            <img alt="" src={rightArrow} className="size-20"></img>
        </button>
    );
};

export const LeftButton = ({ onClick }) => {
    return (
        <button onClick={onClick}>
            <img alt="" src={leftArrow} className="size-20"></img>
        </button>
    );
}