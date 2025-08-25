import React, { useEffect, useState } from "react";
import { navLinks } from "../data";

const NavBar = ({ children }) => {
    const [active, setActive] = useState("hero");
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.2,
                rootMargin: '0px 0px -50% 0px'
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    return (
        <nav className="w-full fixed z-50 top-0 left-0 right-0 bg-transparent shadow-none p-4 sm:p-8 sm:px-16 sm:py-6">
            {/* Mobile Menu Button */}
            <div className="lg:hidden flex justify-end mb-4">
                <button
                    onClick={() => setToggle(!toggle)}
                    className="text-white p-2 rounded-lg bg-secondary/80 backdrop-blur-sm"
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {toggle ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {toggle && (
                <div className="lg:hidden bg-secondary/95 backdrop-blur-sm rounded-lg p-4 mb-4">
                    <ul className='flex flex-col gap-4'>
                        {navLinks.map((nav) => (
                            <li
                                key={nav.id}
                                className={`relative flex items-center pl-3 ${
                                    active === nav.id ? "text-white" : "text-slate-400"
                                } hover:text-white text-lg font-bold cursor-pointer`}
                                onClick={() => {
                                    setActive(nav.id);
                                    setToggle(false);
                                }}
                            >
                                {active === nav.id && (
                                    <div className="absolute left-0 w-2 h-6 bg-quaternary"></div>
                                )}
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Desktop Navigation */}
            <div className="hidden lg:block pl-0 sm:pl-28">
                <ul className='flex flex-row flex-wrap gap-2 sm:gap-5 justify-center sm:justify-start'>
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className={`relative flex items-center pl-3 ${
                                active === nav.id ? "text-white" : "text-slate-500"
                            } hover:text-white text-base sm:text-lg lg:text-xl font-bold pointer-events-auto cursor-pointer`}
                            onClick={() => setActive(nav.id)}
                        >
                            {active === nav.id && (
                                <div className="absolute left-0 w-2 h-6 lg:h-8 bg-quaternary"></div>
                            )}
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;