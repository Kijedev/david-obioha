import type { Metadata } from "next";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Navbar from "../Components/Navbar/page";
import Projects from "../Section/Projects/page";
import Link from "next/link";
import Footer from "../Section/Footer/page";

export const metadata: Metadata = {
    title: "",
    description: "",
};

export default function page() {
    return (
        <main className="bg-white">
            <Navbar />

            <header className="lg:h-screen h-[80vh] flex flex-col justify-center px-4 sm:px-6 md:px-10 lg:px-20 pt-10 text-white overflow-hidden">
                {/* <p className="text-center text-sm sm:text-base md:text-lg text-[#101828]/80 mb-6">Hello, I'm</p> */}

                <div className="relative w-fit max-w-full">
                    <span className="absolute -left-2 sm:-left-4 md:left-48 top-[10%] md:top-[5%] rotate-[-12deg] bg-purple-300/90 text-purple-900 px-2 sm:px-3 md:px-4 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium shadow-lg">
                        Data Analysis
                    </span>

                    <span className="absolute right-0 lg:right-[30%] right-[20%] -top-4 md:top-6 rotate-[12deg] bg-blue-300/90 text-blue-900 px-2 sm:px-3 md:px-4 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium shadow-lg">
                        Datasets
                    </span>

                    <span className="absolute right-0 lg:right-[40%] right-[20%] bottom-[10%] sm:bottom-[20%] rotate-[10deg] bg-pink-300/90 text-pink-900 px-2 sm:px-3 md:px-4 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium shadow-lg">
                        Data Cleaning
                    </span>

                    <span className="absolute left-[5%] md:left-[30%] -bottom-3 md:bottom-16 rotate-[-8deg] bg-orange-300/90 text-orange-900 px-2 sm:px-3 md:px-4 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs md:text-sm font-medium shadow-lg">
                        Visualization
                    </span>

                    <h1 className="text-[#101828] font-bold tracking-[-0.04em] leading-[0.85] text-center text-[3.7rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] max-w-8xl">
                        OBIOHA IKECHUKWU DAVID</h1>
                </div>

                <p className="text-md text-[#101828]/80 text-center mt-6 sm:mt-8 max-w-2xl mx-auto">
                    A Data Analyst with a solid foundation in data cleaning, analysis, and visualization. Hands-on experience working on real-world datasets through structured training, internship experience, and independent projects
                </p>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 text-[#101828]">
                    <button className="cursor-pointer border border-[#101828] rounded-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base hover:bg-[#101828] hover:text-white transition">
                        View My Work</button>

                    <div className="flex gap-4 text-xl sm:text-2xl">
                        <Link href="https://www.linkedin.com/in/david-obioha-07092002/" target="_blank">
                            <span className="h-12 w-12 text-2xl text-[#101828] p-1 rounded-full bg-black/5 flex items-center justify-center hover:bg-black/10 transition">
                                <TiSocialLinkedin />
                            </span>
                        </Link>
                        <Link href="https://wa.me/2348104678668" target="_blank">
                            <span className="h-12 w-12 text-2xl text-[#101828] p-1 rounded-full bg-black/5 flex items-center justify-center hover:bg-black/10 transition">
                                <FaWhatsapp />
                            </span>
                        </Link>

                        <Link href="" target="_blank">
                            <span className="h-12 w-12 text-2xl text-[#101828] p-1 rounded-full bg-black/5 flex items-center justify-center hover:bg-black/10 transition">
                                <MdOutlineEmail />
                            </span>
                        </Link>
                    </div>
                </div>
            </header>

            <Projects />
            <Footer />
        </main>
    );
}