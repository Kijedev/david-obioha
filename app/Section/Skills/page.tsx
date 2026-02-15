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
        "Microsoft Excel /CSV",
        "SQL",
        "Power BI",
        "Python (Pandas, NumPy, Matplotlib)",
        "DAX (Data Analysis Expressions)",
        "Data Modeling & Visualization"
    ];

    return (
        <section className="bg-[#060A15] text-white px-6 md:px-20 py-20">
            <div className=" space-y-12">
                {/* Header */}
                <div className="text-left ">
                    <h2 className="text-5xl lg:text-6xl font-bold text-white mb-2">Skills & Tools</h2>
                    <p className="text-white/60 text-lg">
                        Core competencies and the technologies I work with daily.
                    </p>
                </div>

                {/* Core Skills */}
                <div>
                    <h3 className="text-2xl font-semibold mb-6 text-white">Core Data Analysis Skills</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {coreSkills.map((skill, index) => (
                            <div
                                key={index}
                                className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-indigo-500/10 transition"
                            >
                                <p className="text-white/80 font-medium">{skill}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tools & Technologies */}
                <div>
                    <h3 className="text-2xl font-semibold mb-6 text-white">Tools & Technologies</h3>
                    <div className="flex flex-wrap gap-4">
                        {tools.map((tool, index) => (
                            <span
                                key={index}
                                className="bg-white/5 border border-white/10 rounded-full px-4 py-2 text-white/80 font-medium hover:bg-indigo-500/10 transition"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
