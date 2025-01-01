"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  FaHandshake,
  FaClipboardCheck,
  FaWpforms,
  FaFileContract,
  FaStamp,
} from "react-icons/fa";

const cardData = [
  {
    icon: FaClipboardCheck,
    id: 1,
    title: "1.",
    content: "Deal Review",
  },
  {
    icon: FaWpforms,
    id: 2,
    title: "2.",
    content: "Complete Loan Application",
  },
  {
    icon: FaFileContract,
    id: 3,
    title: "3.",
    content: "Underwriting",
  },
  {
    icon: FaStamp,
    id: 4,
    title: "4.",
    content: "Conditional Approval",
  },
  {
    icon: FaHandshake,
    id: 5,
    title: "5.",
    content: "Loan Closing",
  },
];

const ProgressBar = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const progressLineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const desktopCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const desktopProgressRefs = useRef<(HTMLDivElement | null)[]>([]);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // Mobile animation setup (unchanged)
    if (containerRef.current) {
      const validCardRefs = cardRefs.current.filter(
        (ref): ref is HTMLDivElement => ref !== null
      );
      const validProgressLines = progressLineRefs.current.filter(
        (ref): ref is HTMLDivElement => ref !== null
      );

      validCardRefs.forEach((card, index) => {
        gsap.set(card, {
          clipPath: "inset(0 0 100% 0)",
          opacity: 0,
          y: 50,
        });

        if (index < validCardRefs.length) {
          const progressLine = validProgressLines[index];

          ScrollTrigger.create({
            trigger: card,
            start: "top 80%",
            onEnter: () => {
              gsap.to(card, {
                clipPath: "inset(0 0 0% 0)",
                opacity: 1,
                y: 0,
                duration: 1.3,
                ease: "power3.out",
              });

              if (progressLine) {
                const dynamicProgress = progressLine.querySelector(
                  ".dynamic-progress"
                ) as HTMLDivElement;
                gsap.to(dynamicProgress, {
                  height: "100%",
                  duration: 1,
                  ease: "power3.out",
                });
              }
            },
            onLeaveBack: () => {
              if (progressLine) {
                const dynamicProgress = progressLine.querySelector(
                  ".dynamic-progress"
                ) as HTMLDivElement;
                gsap.to(dynamicProgress, {
                  height: "0%",
                  duration: 0.5,
                  ease: "power3.in",
                });
              }
            },
          });
        }
      });
    }

    // Desktop animation setup
    const validDesktopCards = desktopCardRefs.current.filter(
      (ref): ref is HTMLDivElement => ref !== null
    );
    const validDesktopProgress = desktopProgressRefs.current.filter(
      (ref): ref is HTMLDivElement => ref !== null
    );

    // Initial states
    validDesktopCards.forEach((card) => {
      gsap.set(card, {
        opacity: 0,
        y: 50,
      });
    });

    validDesktopProgress.forEach((progress) => {
      gsap.set(progress, {
        scaleX: 0,
        transformOrigin: "left",
      });
    });

    // Create desktop animation timeline
    const desktopTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".desktop-container",
        start: "top center",
      },
    });

    // Animate first card immediately
    desktopTimeline.to(validDesktopCards[0], {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    // Animate remaining cards and progress lines
    validDesktopProgress.forEach((progress, index) => {
      // Animate progress line
      desktopTimeline.to(
        progress,
        {
          scaleX: 1,
          duration: 1,
          delay: 0.3,
          ease: "power3.inOut",
        },
        ">"
      );

      // Animate next card (if exists)
      if (validDesktopCards[index + 1]) {
        desktopTimeline.to(
          validDesktopCards[index + 1],
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          ">"
        );
      }
    });
  }, []);

  return (
    <>
      <div
        className="w-full flex justify-center items-center min-h-screen lg:my-10 md:my-14 my-16 lg:hidden"
        ref={containerRef}
      >
        <div className="flex flex-col justify-center items-center">
          {cardData.map((card, index) => (
            <div key={index} className="w-full flex relative progress_line ">
              <div className="flex flex-col gap-0">
                <div className="h-5 w-5 rounded-full bg-custom-gradient"></div>
                {index !== cardData.length - 1 && (
                  <div
                    ref={(el) => {
                      if (progressLineRefs.current) {
                        progressLineRefs.current[index] = el;
                      }
                    }}
                    className="h-40 w-1 bg-gray-600 relative overflow-hidden mx-auto"
                  >
                    <div
                      className="dynamic-progress absolute top-0 left-0 w-full bg-custom-gradient"
                      style={{
                        height: "0%",
                        transition: "height 1.3s ease",
                      }}
                    ></div>
                  </div>
                )}
              </div>
              <div
                ref={(el) => {
                  if (cardRefs.current) {
                    cardRefs.current[index] = el;
                  }
                }}
                className={`absolute lg:w-[20vw] w-[40vw] attend_card ${
                  index % 2 === 0
                    ? "lg:left-[100px] left-[35px]"
                    : "lg:right-[100px] right-[35px]"
                }`}
              >
                <div className="mb-4 text-white ">
                  <card.icon className="w-12 h-12 mx-auto " />
                </div>
                <Card className="flex bg-gray-600 flex-col items-center justify-center text-center md:min-h-[10vh] min-h-[25vh] ">
                  <CardHeader>
                    <CardTitle className="md:text-3xl text-xl mt-0 mb-0 font-medium text-white">
                      {card.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-white md:text-2xl text-lg">
                    <p>{card.content}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden lg:flex justify-center items-center w-full pt-20 flex-col gap-10 desktop-container">
        <div className="flex justify-center items-center gap-12 w-full">
          {cardData.map((card, index) => (
            <div
              className="flex flex-col gap-10"
              key={index}
              ref={(el) => {
                if (desktopCardRefs.current) {
                  desktopCardRefs.current[index] = el;
                }
              }}
            >
              <div key={index} className="w-full flex flex-col items-center">
                <div className="mb-4 text-white ">
                  <card.icon className="w-12 h-12 mx-auto " />
                </div>
                <Card className="flex bg-gray-600 flex-col items-center justify-between text-center min-h-[30vh] w-[15vw] p-2">
                  <CardHeader className="flex flex-col items-center w-full">
                    <CardTitle className="md:text-3xl text-xl mt-0 mb-2 font-medium text-white">
                      {card.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex items-center justify-center text-white md:text-xl text-lg w-full flex-grow">
                    {card.content}
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
        <div className="flex">
          {cardData.map((card, index) => (
            <div
              className="flex gap-0 items-center justify-center w-full"
              key={index}
            >
              <div className="h-5 w-5 rounded-full bg-custom-gradient"></div>
              {index !== cardData.length - 1 && (
                <div className="h-1 w-[18vw] bg-gray-600 relative overflow-hidden">
                  <div
                    ref={(el) => {
                      if (desktopProgressRefs.current) {
                        desktopProgressRefs.current[index] = el;
                      }
                    }}
                    className="absolute top-0 left-0 w-full h-full bg-custom-gradient"
                  ></div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div
              id="intro_button"
              className="w-[100%] p-4 flex md:justify-center justify-center"
            >
              <button
                className="px-6 py-3 bg-gray-200 text-black rounded-lg shadow-md hover:bg-gray-300 transition"
                onClick={() =>
                  document
                    .getElementById("form_sec")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Request Funds Here
              </button>
            </div>
      </div>
    </>
  );
};

export default ProgressBar;
