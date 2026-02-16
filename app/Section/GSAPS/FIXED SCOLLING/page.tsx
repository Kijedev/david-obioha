"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AnimatedSections() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(".panel");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%", // 3 sections
          scrub: true,
          pin: true,
        },
      });

      sections.forEach((section, i) => {
        if (i !== 0) {
          tl.from(section, {
            yPercent: 100,
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Panel 1 */}
      <div className="panel absolute inset-0 flex items-center justify-center bg-black text-white text-[clamp(2rem,6vw,5rem)]">
        Scroll Down
      </div>

      {/* Panel 2 */}
      <div className="panel absolute inset-0 flex items-center justify-center bg-blue-600 text-white text-[clamp(2rem,6vw,5rem)]">
        Animated with GSAP
      </div>

      {/* Panel 3 */}
      <div className="panel absolute inset-0 flex items-center justify-center bg-green-600 text-white text-[clamp(2rem,6vw,5rem)]">
        Inside Normal Page
      </div>
    </section>
  );
}
