"use client";

import { motion } from "framer-motion";

export default function SkillsSection() {
    const coreSkills = [
        "Data Cleaning & Preparation",
        "Data Entry",
        "Exploratory Data Analysis (EDA)",
        "Data Visualization & Dashboards",
        "KPI Tracking & Reporting",
        "Insight Generation & Documentation",
    ];

    const tools = [
        "Microsoft Excel / CSV",
        "SQL",
        "Power BI",
        "Python (Pandas, NumPy, Matplotlib)",
        "DAX (Data Analysis Expressions)",
        "Data Modeling & Visualization",
    ];

    return (
        <section
            id="skills"
            className="bg-[#060A15] text-white px-6 md:px-20 py-20"
        >
            <div className="space-y-12">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="text-5xl lg:text-6xl font-bold text-white mb-2 inline-block pl-4 border-l-4 border-[#FFBF78]">
                        Skills & Tools
                    </h2>
                    <p className="text-white/60 text-lg">
                        Core competencies and the technologies I work with daily.
                    </p>
                </motion.div>

                {/* Core Skills */}
                <div>
                    <h3 className="text-2xl font-semibold mb-6 text-white">
                        Core Data Analysis Skills
                    </h3>

                    <motion.div
                        className="grid md:grid-cols-3 gap-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.15,
                                },
                            },
                        }}
                    >
                        {coreSkills.map((skill, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 40 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                whileHover={{ y: -6 }}
                                className="bg-white/5 border border-white/10 rounded-xl p-5 text-center hover:bg-indigo-500/10 transition"
                            >
                                <p className="text-white/80 font-medium">{skill}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Tools & Technologies */}
                <div>
                    <h3 className="text-2xl font-semibold mb-6 text-white">
                        Tools & Technologies
                    </h3>

                    <motion.div
                        className="flex flex-wrap gap-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.1,
                                },
                            },
                        }}
                    >
                        {tools.map((tool, index) => (
                            <motion.span
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                transition={{ duration: 0.5 }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white/5 border border-white/10 rounded-full px-4 py-2 text-white/80 font-medium hover:bg-indigo-500/10 transition"
                            >
                                {tool}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
