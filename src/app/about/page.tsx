"use client";

import { useRef, useEffect } from "react";
// import Image from "next/image"
// import ThreeBackground from "@/components/ThreeBackground"
import { mergedExpertiseCards, aboutUsPageContent } from "@/lib/data";
import WorkHeader from "@/components/work/WorkHeader";
import MaskedDiv from "@/components/ui/masked-div";
import Navbar from "../(home)/components/Navbar";
import AnimatedHeading from '@/components/ui/AnimatedHeading';
import ButtonShowcase from "../(home)/components/ButtonShowcase";
export default function About() {

  const sectionRefs = {
    about: useRef<HTMLDivElement>(null),
    philosophy: useRef<HTMLDivElement>(null),
    expertise: useRef<HTMLDivElement>(null),
    cta: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    // Simple Intersection Observer for section animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections
    document.querySelectorAll(".section-animate").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="pt-4 pb-2">
      <Navbar/>
      <section
        ref={sectionRefs.about}
        // Updated class to handle both themes
        className="section-animate py-20 px-4 md:px-8 relative"
      >
        <div className="container mx-auto">
          <div className="pb-10">
            <WorkHeader title="About KraftX" textColor="gradient-text" />
          </div>
          {/* Updated heading with theme-aware text color */}
          <AnimatedHeading className="text-2xl text-gray-900 dark:text-white sm:text-4xl md:text-6xl lg:text-7xl font-[poppins] mb-12">
            {aboutUsPageContent.hero.heading}
          </AnimatedHeading>
        </div>
      </section>

      <section
        ref={sectionRefs.philosophy}
        // Updated background and text colors
        className="section-animate bg-gray-900 py-20 px-4 md:px-8"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text2">
                {aboutUsPageContent.philosophy.title}
              </h2>
              <div>
                {aboutUsPageContent.philosophy.paragraphs.map(
                  (paragraph, index) => (
                    <p
                      key={index}
                      // Updated paragraph text color
                      className="text-xl md:text-2xl text-gray-300 dark:text-gray-300 mb-6"
                    >
                      {paragraph}
                    </p>
                  )
                )}
              </div>
            </div>

            <div className="relative h-full rounded-xl overflow-hidden transition-transform">
              <MaskedDiv maskType="type-1" size={0.60} >
                <video
                  className="cursor-pointer transition-all duration-300 hover:scale-150"
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
              {/* <Image 
                src={aboutUsPageContent.philosophy.image} 
                alt="KraftX Team Working" 
                fill 
                className="object-fill"
                loading="lazy"
              /> */}
            </div>
          </div>
        </div>
      </section>

      <section
        ref={sectionRefs.expertise}
        className="section-animate py-20 px-4 md:px-8"
      >
        <div className="container mx-auto">
          {/* Updated heading with theme-aware text color */}
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-900 dark:text-white">
            {aboutUsPageContent.expertise.title}
          </h2>

            
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mergedExpertiseCards.map((card, index) => (
              <div
                key={index}
                // Updated card background and shadow
                className={`expertise-card dark:bg-gray-900 p-8 rounded-xl shadow-lg dark:shadow-md transition-all duration-300 hover:scale-110 delay-${
                  index * 100 > 500 ? 500 : index * 100
                }`}
                style={
                  {
                    "--card-color": card.color,
                  } as React.CSSProperties
                }
              >
                <div className="flex items-center mb-4">
                  <card.icon
                    size={30}
                    className={`${card.iconClass} mr-2 font-bold`}
                  />
                  {/* Updated card title color */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {card.title}
                  </h3>
                </div>
                {/* Updated card description color */}
                <p className="text-gray-700 dark:text-gray-300">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={sectionRefs.cta}
        className="section-animate py-20 px-4 md:px-8"
      >
        <div className="container mx-auto max-w-4xl text-center">
          {/* Updated CTA text colors */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900 dark:text-white">
            {aboutUsPageContent.cta.title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
            {aboutUsPageContent.cta.text}
          </p>
          <div className="transition-transform hover:scale-110 active:scale-95">
            <a
              href={aboutUsPageContent.cta.buttonLink}
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl shadow-md dark:shadow-white text-lg font-medium hover:opacity-90 transition-opacity"
            >
              {aboutUsPageContent.cta.buttonText}
            </a>
          </div>
        </div>
      </section>
      <ButtonShowcase/>
    </main>
  );
}
