import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Experience & Training",
    description: "Project experience, professional experience, training, and education.",
};

export default function Page() {
    const projects = [
        {
            title: "Sales Performance Analysis | Power BI",
            description: "Built interactive dashboards and identified performance trends.",
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
            description: "Worked on data cleaning, dashboard creation, and SQL queries for business metrics reporting.",
        },
    ];

    const trainings = [
        {
            title: "Data Analysis Training",
            institution: "New Horizons",
            description: "Comprehensive training on data analysis techniques and tools including Excel, SQL, and Power BI.",
        },
    ];

    const education = [
        {
            degree: "B.Sc Education",
            institution: "Educational Foundation, Nnamdi Azikiwe University, Awka",
        },
    ];

    return (
        <main id="workhistory" className="min-h-screen bg-[#F8F8F8] text-black px-6 md:px-20 py-20 space-y-20">
            {/* Header */}
            <div className="lg:text-right">
                <h1 className="lg:text-6xl text-5xl font-bold text-[#060A15] mb-2">Experience & Training</h1>
                <p className="text-[#060A15]/70 text-lg mt-4">
                    Projects, professional experience, trainings, and education that shape my data analytics journey.
                </p>
            </div>

            {/* Project Experience */}
            <section className="max-w-6xl mx-auto space-y-8">
                <h2 className="text-3xl font-bold text-[#060A15] mb-4">Project Experience</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-black/5 border border-[#060A15]/10 rounded-2xl p-6 hover:bg-[#060A15]/10 transition"
                        >
                            <h3 className="text-xl text-[#060A15] font-semibold mb-2">{project.title}</h3>
                            <p className="text-[#060A15]/70">{project.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Professional Experience */}
            <section className="max-w-6xl mx-auto space-y-8">
                <h2 className="text-3xl font-bold text-[#060A15] mb-4">Professional Experience</h2>
                <div className="space-y-6">
                    {professionalExperience.map((job, index) => (
                        <div
                            key={index}
                            className="bg-black/5 border border-[#060A15]/10 rounded-2xl p-6 hover:bg-[#060A15]/10 transition"
                        >
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-xl font-semibold text-[#060A15]">{job.role}</h3>
                                <span className="text-[#060A15]/50 text-sm">{job.period}</span>
                            </div>
                            <p className="text-[#060A15]/70">{job.company}</p>
                            <p className="text-[#060A15]/60 mt-2">{job.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 text-[#101828] max-w-6xl mx-auto">
                {/* Training */}
                <section className="max-w-6xl mx-auto space-y-8">
                    <h2 className="text-3xl font-bold text-[#060A15] mb-4">Training</h2>
                    <div className="space-y-6">
                        {trainings.map((train, index) => (
                            <div
                                key={index}
                                className="bg-black/5 border border-[#060A15]/10 rounded-2xl p-6 hover:bg-[#060A15]/10 transition"
                            >
                                <h3 className="text-xl font-semibold mb-2">{train.title}</h3>
                                <p className="text-black/70">{train.institution}</p>
                                <p className="text-black/60 mt-2">{train.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Education */}
                <section className="max-w-6xl mx-auto space-y-8">
                    <h2 className="text-3xl font-bold text-[#060A15] mb-4">Education</h2>
                    <div className="space-y-6">
                        {education.map((edu, index) => (
                            <div
                                key={index}
                                className="bg-black/5 border border-[#060A15]/10 rounded-2xl p-6 hover:bg-[#060A15]/10 transition"
                            >
                                <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                                <p className="text-black/70">{edu.institution}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
