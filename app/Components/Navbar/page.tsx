"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Page() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const checkScreen = () => {
            const large = window.innerWidth >= 1024;
            setIsLargeScreen(large);

            // reset when leaving large screen
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
          backdrop-blur-md
          transition-all duration-500 ease-in-out
          mx-4 md:mx-6 lg:mx-auto

          ${isLargeScreen
                        ? scrolled
                            ? `
                  lg:max-w-4xl
                  px-6 py-6
                  rounded-full
                  bg-[#fff]/50
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

                {/* Logo */}
                <Link
                    href="/"
                    className={`font-bold transition-all duration-500 text-[#101828] ${isLargeScreen && scrolled ? "text-base" : "text-lg"
                        }`}
                >
                    David <span className="text-orange-300">Obioha</span>
                </Link>

                {/* Desktop menu */}
                <ul
                    className={`hidden md:flex items-center transition-all duration-500 text-[#101828] ${isLargeScreen && scrolled
                        ? "gap-6 text-sm"
                        : "gap-8 text-base"
                        }`}
                >
                    <li><Link href="#">About</Link></li>
                    <li><Link href="#">Projects</Link></li>
                    <li><Link href="#">Work History</Link></li>
                    <li><Link href="#">Contact</Link></li>
                </ul>

                {/* Mobile hamburger */}
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
                className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={() => setOpen(false)}
            />


            {/* Mobile sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-[#101828] text-white z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex justify-between items-center p-4 border-b border-white/20">
                    <span className="font-bold">Menu</span>
                    <button onClick={() => setOpen(false)}>✕</button>
                </div>

                <ul className="flex flex-col gap-6 p-6">
                    <li><Link href="#" onClick={() => setOpen(false)}>About</Link></li>
                    <li><Link href="#" onClick={() => setOpen(false)}>Projects</Link></li>
                    <li><Link href="#" onClick={() => setOpen(false)}>Work History</Link></li>
                    <li><Link href="#" onClick={() => setOpen(false)}>Contact</Link></li>
                </ul>
            </div>

        </div>
    );
}
