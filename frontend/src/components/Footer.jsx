import React from "react";
import  SectionWrapper  from "../hook/SectionWrapper"
import { github } from "@/assets"

const Footer = () => {
    return (
        <div className="flex items-center justify-center -mt-12">
            <p className="font-helvetica text-slate-500">© {new Date().getFullYear()} Margarita Kattsyna. All rights reserved.</p>
        </div>
    );
};

export default SectionWrapper(Footer, "footer");