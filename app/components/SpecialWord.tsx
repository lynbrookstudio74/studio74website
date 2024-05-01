"use client";
import { ReactNode, useEffect, useMemo, useRef } from "react";

export default function SpecialWord({
  children,
  period,
}: {
  children: ReactNode;
  period?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const periodRef = useRef<HTMLSpanElement>(null);
  // const observer = useMemo(
  //   () =>
  //     new IntersectionObserver(() => {
  //       ref.current!.style.maxWidth = "100%";
  //       if (periodRef.current) {
  //         periodRef.current.style.color = "#d9595c";
  //       }
  //     }, {}),
  //   []
  // );
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          ref.current!.style.maxWidth = "100%";
          if (periodRef.current) {
            periodRef.current.style.color = "#d9595c";
          }
        }, 200);
      }
    });
    observer.observe(ref.current!);
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <span className="group inline-block transition duration-300">
      {children}
      {period && (
        <span className="text-black transition duration-300" ref={periodRef}>
          .
        </span>
      )}
      <span
        className={`block z-20 bg-red max-w-0 transition-all duration-300 -mt-0.5 h-[3px]`}
        ref={ref}
      />
    </span>
  );
}
