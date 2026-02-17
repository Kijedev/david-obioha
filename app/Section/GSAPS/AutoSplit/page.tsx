"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function AboutSection() {
    useEffect(() => {
        if (typeof window === "undefined") return;

        gsap.set(".split", { opacity: 1 });

        document.fonts.ready.then(() => {
            const containers = gsap.utils.toArray<HTMLElement>(".split-container");

            containers.forEach((container) => {
                const text = container.querySelector<HTMLElement>(".split");
                if (!text) return;

                SplitText.create(text, {
                    type: "words,lines",
                    mask: "lines",
                    linesClass: "line",
                    autoSplit: true,
                    onSplit: (instance) => {
                        return gsap.from(instance.lines, {
                            yPercent: 120,
                            stagger: 0.1,
                            scrollTrigger: {
                                trigger: container,
                                start: "top center",
                                end: "bottom center",
                                scrub: true,
                            },
                        });
                    },
                });
            });
        });
    }, []);

    const paragraphs = [
        `I am an aspiring Data Analyst with hands-on experience turning raw data into insights that support informed decision-making.
    My journey in data analytics includes working with real datasets to analyze trends, build reports, and communicate findings clearly and effectively.`,
        `Through internships, training, and self-driven projects, I have developed strong skills in Power BI, SQL, Excel, and DAX,
    focusing on data modeling, KPI development, and interactive dashboard design. I have built dashboards that track performance,
    analyze profit and sales trends, and present insights in a way that stakeholders can easily understand and act upon.`,
        `I have also worked on validating data between SQL queries and Power BI reports, identifying discrepancies, and improving data accuracy
    through proper modeling and measure design. These experiences strengthened my analytical thinking, attention to detail, and problem-solving skills.`,
        `Beyond technical expertise, I value discipline, continuous learning, and clear communication. I enjoy collaborating with teams,
    asking the right questions, and using data to create measurable impact. I am actively growing my experience and open to opportunities where I can contribute, learn, and deliver value through data.`,
    ];

    return (
        <main id="about" className="min-h-screen bg-[#FFFFFF] text-[#060A15] px-6 md:px-20 py-20 flex flex-col gap-12">
            <div className="text-center">
                <h1 className="text-5xl font-bold mb-4 text-[#060A15] inline-block pl-4 border-l-4 border-[#99CAFF]">Know Me!</h1>
                <p className="text-[#060A15]/80 text-lg">
                    Turning data into actionable insights that drive better business decisions.
                </p>
            </div>

            <div className="space-y-8 max-w-7xl mx-auto">
                {paragraphs.map((text, i) => (
                    <div key={i} className="split-container">
                        <p className="split text-[#060A15] text-base md:text-xl leading-relaxed text-center">
                            {text}
                        </p>
                    </div>
                ))}
            </div>
        </main>
    );
}
