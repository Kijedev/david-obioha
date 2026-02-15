import type { Metadata } from "next";
import Link from "next/link";
import { TiSocialLinkedin } from "react-icons/ti";
import { IoMdCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export const metadata: Metadata = {
    title: "",
    description: "",
};

export default function page() {
    return (
        <section className="bg-[#060A15] flex flex-col justify-center pt-10 lg:pt-32 pb-10">
            <main className="flex justify-between lg:flex-row flex-col gap-10 px-4 sm:px-6 md:px-10 lg:px-20">
                <div className="flex flex-col gap-2">
                    <h1 className="text-white text-3xl font-bold">David Obioha</h1>
                    <p className="text-white/50 text-lg">Data Analyst</p>
                </div>

                <div>
                    <h1 className="text-white text-3xl font-bold">Get in Touch</h1>
                    <div className="flex flex-col gap-2 mt-8">
                        <div className="flex items-center gap-2 text-white">
                            <span className="h-12 w-12 text-2xl p-1 rounded-full bg-white/10 flex items-center justify-center">
                                <MdOutlineEmail />
                            </span>
                            <div className="text-white/50">davidobioha268@gmail.com</div>
                        </div>
                        <div className="flex items-center gap-2 text-white">
                            <span className="h-12 w-12 text-2xl p-1 rounded-full bg-white/10 flex items-center justify-center">
                                <IoMdCall />
                            </span>
                            <div className="text-white/50">+234 705 407 5547</div>
                        </div>
                    </div>
                    <div className="flex gap-4 text-xl sm:text-2xl mt-8">
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
            </main>

            <div className="lg:px-20 px-4 mt-10 lg:mt-20 ">
                <hr className="border-white/10" />
            </div>

            <div className="mt-10">
                <p className="text-white/30 text-sm text-center">© 2026 David Obioha. All rights reserved.</p>
            </div>
        </section>
    );
}