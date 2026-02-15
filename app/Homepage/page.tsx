import type { Metadata } from "next";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Navbar from "../Components/Navbar/page";
import About from "../About/page";
import Skills from "../Section/Skills/page";
import Projects from "../Projects/page";
import Experience from "../Experience/page";
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

                <div className="relative w-full max-w-[1400px] mx-auto px-4 py-20 flex justify-center items-center">

                    {/* Floating Tags */}

                    <span className="absolute 
    left-[5%] top-[10%] 
    sm:left-[10%] sm:top-[8%]
    md:left-[15%] md:top-[5%]
    rotate-[-12deg] 
    bg-purple-300/90 text-purple-900 
    px-3 py-1 
    rounded-full text-xs sm:text-sm 
    font-medium shadow-lg">
                        Data Analysis
                    </span>

                    <span className="absolute 
    right-[5%] top-[5%]
    sm:right-[10%]
    md:right-[15%]
    rotate-[12deg] 
    bg-blue-300/90 text-blue-900 
    px-3 py-1 
    rounded-full text-xs sm:text-sm 
    font-medium shadow-lg">
                        Datasets
                    </span>

                    <span className="absolute 
    right-[8%] bottom-[15%]
    sm:right-[12%] sm:bottom-[18%]
    md:right-[18%] md:bottom-[20%]
    rotate-[10deg] 
    bg-pink-300/90 text-pink-900 
    px-3 py-1 
    rounded-full text-xs sm:text-sm 
    font-medium shadow-lg">
                        Data Cleaning
                    </span>

                    <span className="absolute 
    left-[8%] bottom-[12%]
    sm:left-[12%] sm:bottom-[15%]
    md:left-[18%] md:bottom-[18%]
    rotate-[-8deg] 
    bg-orange-300/90 text-orange-900 
    px-3 py-1 
    rounded-full text-xs sm:text-sm 
    font-medium shadow-lg">
                        Visualization
                    </span>

                    {/* Main Heading */}

                    <h1 className="
    text-[#060A15]
    font-bold
    text-center
    leading-[0.9]
    tracking-[-0.04em]
    text-[clamp(2.5rem,8vw,8rem)]
  ">
                        OBIOHA IKECHUKWU DAVID
                    </h1>

                </div>


                <p className="text-md text-[#101828]/80 text-center mt-6 sm:mt-8 max-w-2xl mx-auto">
                    A Data Analyst with a solid foundation in data cleaning, analysis, and visualization. Hands-on experience working on real-world datasets through structured training, internship experience, and independent projects
                </p>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 text-[#060A15]">
                    <button className="cursor-pointer border border-[#060A15] rounded-full px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base hover:bg-[#060A15] hover:text-white transition">
                        View My Work</button>

                    <div className="flex gap-4 text-xl sm:text-2xl">
                        <Link href="https://www.linkedin.com/in/obioha-david-878743235" target="_blank">
                            <span className="h-12 w-12 text-2xl text-[#060A15] p-1 rounded-full bg-black/5 flex items-center justify-center hover:bg-black/10 transition">
                                <TiSocialLinkedin />
                            </span>
                        </Link>
                        <Link href="https://wa.me/2347054075547" target="_blank">
                            <span className="h-12 w-12 text-2xl text-[#060A15] p-1 rounded-full bg-black/5 flex items-center justify-center hover:bg-black/10 transition">
                                <FaWhatsapp />
                            </span>
                        </Link>

                        <Link href="mailto:davidobioha268@gmail.com" target="_blank">
                            <span className="h-12 w-12 text-2xl text-[#060A15] p-1 rounded-full bg-black/5 flex items-center justify-center hover:bg-black/10 transition">
                                <MdOutlineEmail />
                            </span>
                        </Link>
                    </div>
                </div>
            </header>

            <About />
            <Projects />
            <Skills />
            <Experience />
            <Footer />
        </main>
    );
}