"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HorizontalGallery() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const section = containerRef.current;
      const strip = section?.querySelector(".horiz-strip");

      if (!section || !strip) return;

      const getScrollAmount = () => {
        return strip.scrollWidth - window.innerWidth;
      };

      gsap.to(strip, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${strip.scrollWidth}`,
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-white"
    >
      <div className="horiz-strip flex flex-nowrap h-full">
        {[
          1,2,3,4,5,6,7,8
        ].map((num) => (
          <div
            key={num}
            className="w-[33vw] p-8 shrink-0"
          >
            <img
              src={`https://assets.codepen.io/16327/portrait-image-${num}.jpg`}
              alt=""
              className="w-full aspect-square object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
