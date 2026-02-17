"use client";

import { motion, Variants } from "framer-motion";
import type { Metadata } from "next";

export default function Page() {
    const projects = [
        {
            title: "Sales Performance Analysis | Power BI",
            description:
                "Built interactive dashboards and identified performance trends.",
        },
        {
            title: "Data Cleaning & Preparation | Excel",
            description: "Cleaned datasets and documented workflows.",
        },
        {
            title: "Business Reporting & Metrics Analysis | SQL",
            description: "Extracted and validated business metrics.",
        },
        {
            title: "Exploratory Data Analysis | Python",
            description: "Conducted EDA and visualized insights.",
        },
    ];

    const professionalExperience = [
        {
            role: "Data Analyst Intern",
            company: "RGEP",
            period: "Internship",
            description:
                "Worked on data cleaning, dashboard creation, and SQL queries for business metrics reporting.",
        },
    ];

    const trainings = [
        {
            title: "Data Analysis Training",
            institution: "New Horizons",
            description:
                "Comprehensive training on Excel, SQL, and Power BI for real-world data analysis.",
        },
    ];

    const education = [
        {
            degree: "B.Sc Education",
            institution:
                "Nnamdi Azikiwe University, Awka",
        },
    ];

    const sectionAnimation: Variants = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const cardAnimation: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <main
            id="workhistory"
            className="min-h-screen bg-[#F8F8F8] text-black px-6 md:px-20 py-20 space-y-28"
        >
            {/* Header */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionAnimation}
                className="text-center"
            >
                <h1 className="lg:text-6xl text-5xl font-bold text-[#060A15] inline-block pl-4 border-l-4 border-[#DDB9FF]">
                    Experience & Training
                </h1>
                <p className="text-[#060A15]/70 text-lg mt-6 text-center">
                    Projects, professional experience, trainings, and education that
                    shape my data analytics journey.
                </p>
            </motion.div>

            {/* Project Experience */}
            <motion.section
                className="max-w-6xl mx-auto space-y-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionAnimation}
            >
                <h2 className="text-3xl font-bold text-[#060A15]">
                    Project Experience
                </h2>

                <motion.div
                    className="grid md:grid-cols-2 gap-8"
                    variants={{
                        visible: {
                            transition: { staggerChildren: 0.15 },
                        },
                    }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={cardAnimation}
                            transition={{ duration: 0.6 }}
                            whileHover={{ y: -6 }}
                            className="bg-white shadow-sm border border-[#060A15]/10 rounded-2xl p-6 hover:shadow-md transition"
                        >
                            <h3 className="text-xl text-[#060A15] font-semibold mb-3">
                                {project.title}
                            </h3>
                            <p className="text-[#060A15]/70 leading-relaxed">
                                {project.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>

            {/* Professional Experience */}
            <motion.section
                className="max-w-6xl mx-auto space-y-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionAnimation}
            >
                <h2 className="text-3xl font-bold text-[#060A15]">
                    Professional Experience
                </h2>

                {professionalExperience.map((job, index) => (
                    <motion.div
                        key={index}
                        variants={cardAnimation}
                        transition={{ duration: 0.6 }}
                        whileHover={{ y: -6 }}
                        className="bg-white shadow-sm border border-[#060A15]/10 rounded-2xl p-6 hover:shadow-md transition"
                    >
                        <div className="flex justify-between items-center mb-3">
                            <h3 className="text-xl font-semibold text-[#060A15]">
                                {job.role}
                            </h3>
                            <span className="text-[#060A15]/50 text-sm">
                                {job.period}
                            </span>
                        </div>
                        <p className="text-[#060A15]/70 font-medium">
                            {job.company}
                        </p>
                        <p className="text-[#060A15]/60 mt-3 leading-relaxed">
                            {job.description}
                        </p>
                    </motion.div>
                ))}
            </motion.section>

            {/* Training & Education */}
            <motion.div
                className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionAnimation}
            >
                {/* Training */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-[#060A15]">
                        Training
                    </h2>
                    {trainings.map((train, index) => (
                        <motion.div
                            key={index}
                            variants={cardAnimation}
                            whileHover={{ y: -6 }}
                            className="bg-white shadow-sm border border-[#060A15]/10 rounded-2xl p-6 hover:shadow-md transition"
                        >
                            <h3 className="text-xl font-semibold mb-2">
                                {train.title}
                            </h3>
                            <p className="text-black/70 font-medium">
                                {train.institution}
                            </p>
                            <p className="text-black/60 mt-3 leading-relaxed">
                                {train.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Education */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-[#060A15]">
                        Education
                    </h2>
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            variants={cardAnimation}
                            whileHover={{ y: -6 }}
                            className="bg-white shadow-sm border border-[#060A15]/10 rounded-2xl p-6 hover:shadow-md transition"
                        >
                            <h3 className="text-xl font-semibold mb-2">
                                {edu.degree}
                            </h3>
                            <p className="text-black/70 font-medium">
                                {edu.institution}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </main>
    );
}
