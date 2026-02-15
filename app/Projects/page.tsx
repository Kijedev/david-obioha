"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Page() {
  const [activeProject, setActiveProject] = useState<any>(null);

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    };
  }, [activeProject]);



  const projects = [
    {
      image: "/Image/sales.jpeg",
      title: "Sales Performance & Profitability Analysis (Power BI)",
      shortDescription:
        "Analyzed sales data to evaluate revenue performance and profitability trends.",
      fullDescription: `
      Project Overview

      This project focuses on analyzing sales transaction data to evaluate revenue performance, cost behavior, and profitability trends using Power BI. The goal is to transform raw sales data into actionable insights that support data-driven business decision-making.

      Business Problem

      Organizations often track revenue without fully understanding:

      • Whether sales are profitable  
      • How costs impact margins  
      • Which products, regions, or periods drive losses or growth  

      This project addresses these challenges by providing a clear, executive-level view of sales and profitability.

      Key Objectives

      • Analyze total revenue, total cost, and total profit  
      • Identify profit trends over time  
      • Detect loss-making transactions  
      • Compare performance across products and regions  
      • Support strategic decision-making through visual insights
      `,
    },


    {
      image: "/Image/entry.jpeg",
      title: "Data Entry & Data Organization System",
      shortDescription:
        "Accurately digitized and organized business records for improved data management and accessibility.",
      fullDescription: `
Project Overview

This project focused on accurate data entry, validation, and organization of business records into structured digital formats. The goal was to ensure data accuracy, improve accessibility, and maintain consistency across large datasets.

Business Problem

Many organizations struggle with:

• Inconsistent or incomplete records  
• Manual paperwork errors  
• Difficulty retrieving historical data  
• Lack of standardized data formatting  

This project addressed these challenges by implementing structured data entry processes and validation techniques.

Key Objectives

• Input and digitize large volumes of structured and unstructured data  
• Ensure high accuracy through validation and cross-checking  
• Standardize formatting across datasets  
• Organize records for easy retrieval and reporting  
• Maintain data integrity and consistency

Impact & Results

• Improved data accuracy and reduced entry errors  
• Increased efficiency in data retrieval  
• Enhanced reporting reliability  
• Created a structured database ready for analysis
    `,
      moreDetails: "/",
    },

    {
      image: "/Image/sql.jpeg", // replace with your SQL project image
      title: "SQL Queries & Database Management",
      shortDescription:
        "Wrote SQL queries to extract, manipulate, and analyze data from relational databases.",
      fullDescription: `
Project Overview

This project focused on writing SQL queries to extract, manipulate, and analyze data from relational databases. The goal was to generate insights, create reports, and support business decision-making through accurate database operations.

Business Problem

Many organizations have large datasets stored in databases, but struggle with:

• Extracting meaningful insights  
• Combining data from multiple tables efficiently  
• Generating reports for decision-making  
• Maintaining accurate and efficient queries  

This project addressed these challenges by building optimized SQL queries to retrieve, filter, and aggregate data as needed.

Key Objectives

• Write SELECT, JOIN, GROUP BY, and aggregate queries  
• Optimize queries for performance  
• Extract meaningful insights from raw data  
• Create reports to support business analysis  
• Ensure accuracy and consistency of query results  

Impact & Results

• Improved data accessibility and analysis speed  
• Enabled stakeholders to make data-driven decisions  
• Built reusable SQL queries for recurring business needs  
• Improved understanding of relational database structures
    `,
      moreDetails: "/",
    },
  ];

  return (
    <main id="projects" className="min-h-screen bg-[#F8F8F8] text-white px-6 md:px-16 py-20">
      <div className="max-w-8xl mx-auto lg:text-right mb-16">
        <h1 className="lg:text-6xl text-5xl font-bold text-[#060A15]">Projects</h1>
        <p className="mt-4 text-[#060A15]/70">Some of the projects i've worked on</p>
      </div>

      <div className="max-w-8xl mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white border border-[#060A15]/10 rounded-2xl overflow-hidden"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={500}
              className="w-full h-[250px] object-cover"
            />

            <div className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold text-[#060A15]">{project.title}</h2>
              <p className="text-[#060A15] text-md">
                {project.shortDescription}
              </p>

              <button
                onClick={() => setActiveProject(project)}
                className="px-6 py-4 cursor-pointer rounded-lg bg-[#060A15] hover:bg-[#060A15]/90 transition text-sm"
              >
                More Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {activeProject && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div
            className="absolute inset-0 bg-white/5 backdrop-blur-sm"
            onClick={() => setActiveProject(null)}
          />

          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-[#060A15] text-white w-full max-w-6xl 
                   max-h-[85vh] rounded-2xl shadow-2xl 
                   border border-white/10 flex flex-col"
            >
              <div className="flex justify-between items-center p-6 border-b border-white/10 shrink-0">
                <h2 className="text-2xl font-semibold">
                  {activeProject.title}
                </h2>

                <button
                  onClick={() => setActiveProject(null)}
                  className="text-white/60 hover:text-white text-2xl cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 overflow-y-auto">
                <div className="whitespace-pre-line text-white/70 leading-relaxed space-y-4">
                  {activeProject.fullDescription}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </main>
  );
}
