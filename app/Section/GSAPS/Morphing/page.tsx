"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function ShapeOverlay() {
  const overlayRef = useRef<SVGSVGElement | null>(null);
  const pathsRef = useRef<SVGPathElement[]>([]);
  const isOpenedRef = useRef(false); // to track open/close synchronously
  const hasAnimatedRef = useRef(false); // prevent multiple triggers

  const numPoints = 10;
  const delayPointsMax = 0.3;
  const delayPerPath = 0.25;

  useEffect(() => {
    const overlay = overlayRef.current;
    const paths = pathsRef.current;
    if (!overlay || paths.length === 0) return;

    const allPoints: number[][] = [];
    const pointsDelay: number[] = [];

    for (let i = 0; i < paths.length; i++) {
      const points: number[] = [];
      allPoints.push(points);
      for (let j = 0; j < numPoints; j++) points.push(100);
    }

    const tl = gsap.timeline({
      onUpdate: render,
      defaults: { ease: "power2.inOut", duration: 0.9 },
    });

    function toggle() {
      tl.progress(0).clear();

      for (let i = 0; i < numPoints; i++) pointsDelay[i] = Math.random() * delayPointsMax;

      for (let i = 0; i < paths.length; i++) {
        const points = allPoints[i];
        const pathDelay = delayPerPath * (isOpenedRef.current ? i : paths.length - i - 1);

        for (let j = 0; j < numPoints; j++) {
          const delay = pointsDelay[j];
          tl.to(points, { [j]: 0 }, delay + pathDelay);
        }
      }
    }

    function render() {
      for (let i = 0; i < paths.length; i++) {
        const path = paths[i];
        const points = allPoints[i];

        let d = "";
        d += isOpenedRef.current ? `M 0 0 V ${points[0]} C` : `M 0 ${points[0]} C`;

        for (let j = 0; j < numPoints - 1; j++) {
          const p = ((j + 1) / (numPoints - 1)) * 100;
          const cp = p - 100 / (numPoints - 1) / 2;
          d += ` ${cp} ${points[j]} ${cp} ${points[j + 1]} ${p} ${points[j + 1]}`;
        }

        d += isOpenedRef.current ? ` V 100 H 0` : ` V 0 H 0`;
        path.setAttribute("d", d);
      }
    }

    function startAnimation() {
      if (hasAnimatedRef.current) return;
      hasAnimatedRef.current = true;
      isOpenedRef.current = true;
      toggle();
    }

    // Intersection Observer to trigger animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) startAnimation();
        });
      },
      { threshold: 0.3 } // trigger when 30% of the section is visible
    );

    observer.observe(overlay);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative h-[400px] md:h-[600px] w-full bg-[#0e100f] cursor-pointer overflow-hidden">
      <svg
        ref={overlayRef}
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ff8709" />
            <stop offset="100%" stopColor="#f7bdf8" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffd9b0" />
            <stop offset="100%" stopColor="#ff8709" />
          </linearGradient>
        </defs>
        {[0, 1].map((_, i) => (
          <path
            key={i}
            ref={(el) => {
              if (el) pathsRef.current[i] = el;
            }}
            fill={`url(#gradient${i === 0 ? 2 : 1})`}
          />
        ))}
      </svg>
    </section>
  );
}
