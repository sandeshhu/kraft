"use client";

import MaskedDiv from "@/components/ui/masked-div";

import { SparklesIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

const ComponentsShowcase = () => {
  const [text, setText] = useState("");
  const [sloganIndex, setSloganIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const slogans = [
      "We Satisfy the soul..",
      "........",
      "These are not just designs",
      "..........",
      "These are emotions...",
    ];

    const current = slogans[sloganIndex];
    if (charIndex < current.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + current[charIndex]);
        setCharIndex(charIndex + 1);
      }, 80);

      return () => clearTimeout(timeout);
    } else {
      const delay = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setSloganIndex((prev) => (prev + 1) & slogans.length);
      }, 1800);

      return () => clearTimeout(delay);
    }
  }, [charIndex, sloganIndex]);
  return (
    <section className="py-20 overflow-x-clip">
      <div className="container mx-auto ">
        <div className="flex flex-col items-center">
          <div className="w-fit border rounded-2xl px-4 py-1 flex items-center gap-2">
            <SparklesIcon className="size-4 fill-pink-500 stroke-1 font-mono text-neutral-800" />
            <span className="font-mono">Components Preview</span>
          </div>
          <p className="mt-2 font-mono text-md">hey, {text}</p>
          <div className="mt-5">
            <MaskedDiv maskType="type-4" className="my-4">
              <video
                className="cursor-pointer transition-all duration-300 hover:scale-105"
                autoPlay
                loop
                muted
              >
                <source
                  src="https://videos.pexels.com/video-files/18069232/18069232-uhd_2560_1440_24fps.mp4"
                  type="video/mp4"
                />
              </video>
            </MaskedDiv>
          </div>

          <div className="flex items-center justify-between">
            <MaskedDiv maskType="type-1" size={0.25} className="rotate-180 ">
              <video
                className="cursor-pointer transition-all duration-300 hover:scale-105"
                autoPlay
                loop
                muted
              >
                <source
                  src="https://videos.pexels.com/video-files/18069803/18069803-uhd_1440_2560_24fps.mp4"
                  type="video/mp4"
                />
              </video>
            </MaskedDiv>

            <MaskedDiv maskType="type-1" size={0.35}>
              <video
                className="cursor-pointer transition-all duration-300 hover:scale-105"
                autoPlay
                loop
                muted
              >
                <source
                  src="https://videos.pexels.com/video-files/7710243/7710243-uhd_2560_1440_30fps.mp4"
                  type="video/mp4"
                />
              </video>
            </MaskedDiv>

            <MaskedDiv maskType="type-1" size={0.25} className="rotate-180 ">
              <video
                className="cursor-pointer transition-all duration-300 hover:scale-105"
                autoPlay
                loop
                muted
              >
                <source
                  src="https://videos.pexels.com/video-files/18069166/18069166-uhd_2560_1440_24fps.mp4"
                  type="video/mp4"
                />
              </video>
            </MaskedDiv>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComponentsShowcase;
