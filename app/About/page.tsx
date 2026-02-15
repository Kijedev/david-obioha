"use client";

import { motion } from "framer-motion";

export default function Page() {
  return (
    <main
      id="about"
      className="min-h-screen bg-[#060A15] text-white px-6 md:px-20 py-20 flex flex-col gap-12"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
        className="text-left"
      >
        <h1 className="text-5xl font-bold mb-4 text-white">
          Know Me!
        </h1>
        <p className="text-white/60 text-lg">
          Turning data into actionable insights that drive better business decisions.
        </p>
      </motion.div>

      {/* Content */}
      <motion.div
        className="max-w-8xl mx-auto space-y-8 text-white/60 leading-relaxed text-base md:text-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {[
          <>
            I am an aspiring <span className="font-semibold text-indigo-400">Data Analyst</span> with hands-on experience turning raw data into insights that support informed decision-making.
            My journey in data analytics includes working with real datasets to analyze trends, build reports, and communicate findings clearly and effectively.
          </>,
          <>
            Through internships, training, and self-driven projects, I have developed strong skills in <span className="font-semibold text-indigo-400">Power BI, SQL, Excel, and DAX</span>, focusing on data modeling, KPI development, and interactive dashboard design.
            I have built dashboards that track performance, analyze profit and sales trends, and present insights in a way that stakeholders can easily understand and act upon.
          </>,
          <>
            I have also worked on validating data between SQL queries and Power BI reports, identifying discrepancies, and improving data accuracy through proper modeling and measure design.
            These experiences strengthened my <span className="font-semibold text-indigo-400">analytical thinking, attention to detail, and problem-solving skills</span>.
          </>,
          <>
            Beyond technical expertise, I value <span className="font-semibold text-indigo-400">discipline, continuous learning, and clear communication</span>.
            I enjoy collaborating with teams, asking the right questions, and using data to create measurable impact.
          </>,
          <>
            <span className="font-medium text-indigo-500">
              I am actively growing my experience and open to opportunities where I can contribute, learn, and deliver value through data.
            </span>
          </>,
        ].map((text, index) => (
          <motion.p
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {text}
          </motion.p>
        ))}
      </motion.div>
    </main>
  );
}
