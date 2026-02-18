"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import RightButton from "@/public/buttin-icon-shrunk-right.svg";
import LeftButton from "@/public/buttin-icon-shrunk-left.svg";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const titleRef = useRef<HTMLDivElement>(null);
  const leftButtonRef = useRef<HTMLDivElement>(null);
  const rightButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Title animation
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 2, delay: 0.3, ease: "power2.out" },
      );
    }
  }, []);

  // Left button hover - title moves right, right button fades out
  const handleLeftHover = () => {
    gsap.to(titleRef.current, {
      x: 200,
      duration: 0.6,
      ease: "power2.out",
    });
    gsap.to(rightButtonRef.current, {
      opacity: 0,
      duration: 0.4,
      delay: 0.5,
      ease: "power2.out",
    });
  };

  const handleLeftLeave = () => {
    gsap.to(titleRef.current, {
      x: 0,
      duration: 0.6,
      ease: "power2.out",
    });
    gsap.to(rightButtonRef.current, {
      opacity: 1,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  // Right button hover - title moves left, left button fades out
  const handleRightHover = () => {
    gsap.to(titleRef.current, {
      x: -200,
      duration: 0.6,
      ease: "power2.out",
    });
    gsap.to(leftButtonRef.current, {
      opacity: 0,
      duration: 0.4,
      delay: 0.5,
      ease: "power2.out",
    });
  };

  const handleRightLeave = () => {
    gsap.to(titleRef.current, {
      x: 0,
      duration: 0.6,
      ease: "power2.out",
    });
    gsap.to(leftButtonRef.current, {
      opacity: 1,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  return (
    <>
      <div className="max-md:hidden">
        {/* Discover A.I. Button */}
        <div
          ref={leftButtonRef}
          className="absolute top-1/2 left-0 -translate-y-1/2 overflow-hidden w-100 h-150"
        >
          <div className="w-90 h-90 border-2 border-dotted border-[#A0A4AB] rotate-45 absolute -left-50 top-1/2 -translate-y-1/2" />
          <Link
            href={"/"}
            onMouseEnter={handleLeftHover}
            onMouseLeave={handleLeftLeave}
            className="flex gap-3 items-center absolute top-1/2 -translate-y-1/2 left-8 z-10 cursor-not-allowed group"
          >
            <Image
              src={LeftButton}
              alt="go to Discover A.I. page"
              className="transition-transform duration-300 group-hover:scale-110"
              draggable={false}
            />
            <div className="text-sm uppercase">Discover A.I.</div>
          </Link>
        </div>

        {/* Title - Desktop */}
        <div className="text-7xl text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Sophisticated
          <br />
          skincare
        </div>

        {/* Take Test Button */}
        <div
          ref={rightButtonRef}
          className="absolute top-1/2 right-0 -translate-y-1/2 overflow-hidden w-100 h-150"
        >
          <div className="w-90 h-90 border-2 border-dotted border-[#A0A4AB] rotate-45 absolute -right-50 top-1/2 -translate-y-1/2" />
          <Link
            href="/testing"
            onMouseEnter={handleRightHover}
            onMouseLeave={handleRightLeave}
            className="flex gap-3 items-center absolute top-1/2 -translate-y-1/2 right-8 z-10 cursor-pointer group"
          >
            <div className="text-sm uppercase">Take Test</div>
            <Image
              src={RightButton}
              alt="go to Take Test page"
              className="transition-transform duration-300 group-hover:scale-110"
              draggable={false}
            />
          </Link>
        </div>

        {/* Description */}
        <p className="absolute uppercase text-sm bottom-15 left-15">
          Skinstric developed an A.I. that creates a <br /> highly-personalized
          routine tailored to <br />
          what your skin needs.
        </p>
      </div>

      {/* Mobile and Tablet Screens */}
      <div className="md:hidden text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 items-center">
        {/* Borders */}
        <div className="w-90 h-90 border-2 border-dotted border-[#A0A4AB] rotate-45 absolute -bottom-12 scale-80" />
        <div className="w-90 h-90 border-2 border-dotted border-[#A0A4AB] rotate-45 absolute -bottom-12" />

        {/* Title - Mobile */}
        <p ref={titleRef} className="text-5xl">
          Sophisticated skincare
        </p>
        <p className="text-sm">
          Skinstric developed an A.I. that creates a <br /> highly-personalized
          routine tailored to <br />
          what your skin needs.
        </p>

        <Link
          href={"/testing"}
          className="uppercase text-xs font-bold flex items-center gap-3 hover:scale-110 transition duration-300"
        >
          Enter Experience
          <Image
            src={RightButton}
            alt="go to Take Test page"
            className="transition-transform duration-300 scale-80"
            draggable={false}
          />
        </Link>
      </div>
    </>
  );
}
