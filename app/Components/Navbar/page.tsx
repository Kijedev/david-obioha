"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { TiSocialLinkedin } from "react-icons/ti";
import { IoMdCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Page() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const checkScreen = () => {
            const large = window.innerWidth >= 1024;
            setIsLargeScreen(large);

            if (!large) setScrolled(false);
        };

        const handleScroll = () => {
            if (window.innerWidth >= 1024) {
                setScrolled(window.scrollY > 40);
            }
        };

        checkScreen();

        window.addEventListener("resize", checkScreen);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("resize", checkScreen);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 z-50 pt-4">

            {/* Navbar */}
            <nav
                className={`
          flex justify-between items-center
          text-white relative z-50
          backdrop-blur-sm
          transition-all duration-500 ease-in-out
          mx-4 md:mx-6 lg:mx-auto

          ${isLargeScreen
                        ? scrolled
                            ? `
                  lg:max-w-4xl
                  px-6 py-6
                  rounded-full
                  bg-[#fff]/80
                  shadow-sm
                `
                            : `
                  lg:max-w-7xl
                  px-8 py-6
                  rounded-full
                  bg-[#fff]/50
                `
                        : `
                px-6 py-4
                rounded-full
                bg-[#fff]/50
              `
                    }
        `}
            >
                <Link
                    href="/"
                    className="font-bold transition-all duration-500 text-[#060A15] text-2xl"
                >
                    David O.
                </Link>
                <ul
                    className={`hidden md:flex items-center transition-all duration-500 text-[#060A15] ${isLargeScreen && scrolled
                        ? "gap-6 text-sm"
                        : "gap-8 text-base"
                        }`}
                >
                    <li><Link href="#about">About</Link></li>
                    <li><Link href="#projects">Projects</Link></li>
                    <li><Link href="#workhistory">Work History</Link></li>
                </ul>

                <button
                    onClick={() => setOpen(true)}
                    className="md:hidden flex flex-col gap-1"
                >
                    <span className="w-6 h-0.5 bg-[#101828]"></span>
                    <span className="w-6 h-0.5 bg-[#101828]"></span>
                    <span className="w-6 h-0.5 bg-[#101828]"></span>
                </button>
            </nav>
            
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={() => setOpen(false)}
            />

            {/* Sidebar / Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-full bg-[#060A15] text-white z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="float-right mt-10 mr-10">
                    <button className="text-2xl" onClick={() => setOpen(false)}>✕</button>
                </div>

                {/* Menu */}
                <ul className="flex flex-col gap-10 p-6 mt-20 text-2xl text-center">
                    <li>
                        <Link href="#about" onClick={() => setOpen(false)}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="#projects" onClick={() => setOpen(false)}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="#workhistory" onClick={() => setOpen(false)}>
                            Work History
                        </Link>
                    </li>
                </ul>

                <div className="flex gap-2 text-xl justify-center sm:text-2xl mt-8 px-4">
                    <Link href="https://www.linkedin.com/in/obioha-david-878743235" target="_blank">
                        <span className="h-12 w-12 text-2xl text-white p-1 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
                            <TiSocialLinkedin />
                        </span>
                    </Link>

                    <a href="https://wa.me/2347054075547" target="_blank">
                        <span className="h-12 w-12 text-2xl text-white p-1 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
                            <FaWhatsapp />
                        </span>
                    </a>
                </div>
            </div>

        </div>
    );
}
