"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { section } from "framer-motion/client";

export default function ContactPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus("");

        const res = await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify(form),
        });

        const data = await res.json();

        if (res.ok) {
            setStatus("Thank you for your Message, I'll get back to you soon. 🎉");
            setForm({ name: "", email: "", message: "" });
        } else {
            setStatus(data.error || "Something went wrong.");
        }

        setLoading(false);
    };

    useEffect(() => {
        if (status) {
            const timer = setTimeout(() => {
                setStatus("");
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [status]);


    return (
        <section>
            <div className="relative">
                {status && (
                    <div className="absolute top-10 z-50 right-10 bg-white text-[#060A15] px-6 py-3 rounded-md shadow-sm animate-slide-in">
                        {status}
                    </div>
                )}
            </div>
            <main className="min-h-screen bg-[#fff] text-black px-2 md:px-20 py-24 flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
                <p className="text-[#060A15]/80 mb-8 text-center max-w-xl">
                    I'm currently looking for new opportunities. Whether you have a question or want to say hi, hit that button.
                </p>
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full max-w-2xl bg-[#F8F8F8]/5 border border-[#060A15]/10 rounded-3xl p-6 lg:p-10"
                >


                    <form onSubmit={handleSubmit} className="space-y-6">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full p-4 rounded-sm bg-white/10 border border-[#060A15]/20 focus:outline-none focus:border-indigo-500 transition"
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full p-4 rounded-sm bg-white/10 border border-[#060A15]/20 focus:outline-none focus:border-indigo-500 transition"
                            required
                        />

                        <textarea
                            name="message"
                            placeholder="What can i do for you?"
                            rows={5}
                            value={form.message}
                            onChange={handleChange}
                            className="w-full p-4 rounded-sm bg-white/10 border border-[#060A15]/20 focus:outline-none focus:border-indigo-500 transition"
                            required
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#060A15] hover:bg-[#060A15]/80 text-white p-4 rounded-sm cursor-pointer transition disabled:opacity-50"
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>


                </motion.div>
            </main>
        </section>
    );
}
