"use client";

import { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "@/components/ui/Projectcard";
import { motion } from "framer-motion";
import Navbar from "../(home)/components/Navbar";
import ButtonShowcase from "../(home)/components/ButtonShowcase";

gsap.registerPlugin(ScrollTrigger);

export default function Project2Page() {
  const container = useRef(null);
  const [info, setInfo] = useState<{
    title: string;
    year: number;
    alt: string;
  } | null>(null);
  const projects = [
    {
      image1:
        "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
      altText1: "PJC Project",
      title1: "Voir le Projet",
      year1: 2024,
      image2:
        "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
      altText2: "Widescape Project",
      title2: "View Project",
      year2: 2024,
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg",
      altText1: "Oka Project",
      title1: "Voir le Projet",
      year1: 2024,
      image2:
        "https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg",
      altText2: "Opto Project",
      title2: "View Project",
      year2: 2024,
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg",
      altText1: "Lamajeure Project",
      title1: "Voir le Projet",
      year1: 2024,
      image2:
        "https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg",
      altText2: "Shelton Project",
      title2: "View Project",
      year2: 2024,
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/PME-MTL/PME-MTL_Thumbnail-1280x960.jpg",
      altText1: "PME-MTL Project Thumbnail",
      title1: "Voir le Projet",
      year1: 2024,
      image2:
        "https://k72.ca/uploads/caseStudies/FRUITE/Fruite_thumbnail_bbq-1280x960.jpg",
      altText2: "Fruité Project Thumbnail",
      title2: "View Project",
      year2: 2024,
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
      altText1: "Widescape Project Thumbnail",
      title1: "Voir le Projet",
      year1: 2024,
      image2:
        "https://k72.ca/uploads/caseStudies/SollioAg/thumbnailimage_SollioAg-1280x960.jpg",
      altText2: "Sollio Agriculture Project Thumbnail",
      title2: "View Project",
      year2: 2024,
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/OSM/thumbnail_OSM_1280-1280x960.jpg",
      altText1: "OSM Project Thumbnail",
      title1: "Voir le Projet",
      year1: 2024,
      image2:
        "https://k72.ca/uploads/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail-1280x960.jpg",
      altText2: "BAnQ 100 Temps Project Thumbnail",
      title2: "View Project",
      year2: 2024,
    },
  ];

  useGSAP(
    () => {
      gsap.from(".hero", {
        height: "50px",
        stagger: {
          amount: 1.2, // increase since you have more rows (6 images instead of 3)
        },
        scrollTrigger: {
          trigger: ".lol",
          start: "top 100%", // animation starts when .lol enters
          end: "top -300%", // extend end value to cover 6 rows instead of 3
          scrub: true,
        },
      });
    },
    { scope: container }
  );

  useEffect(() => {
    const handleLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
    
      <div className="sticky top-0 z-50 w-full h-30">
        {info ? (
          <div className=" uppercase p-4 bg-black text-white text-lg flex justify-between items-center">
            <span>{info.title}</span>
            <span>{info.alt}</span>
            <span className="italic opacity-80">{info.year}</span>
          </div>
        ) : (<Navbar/>   )}
      </div>

      <div ref={container} className="m-1">
        <div className="pt-[20vh]">
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            className="font-mono text-[12vw] uppercase mb-3 relative"
          >
            Projects
            <sup className=" absolute top-17 align-super text-[2.5vw]">12</sup>
          </motion.h1>
        </div>
        <div className="-mt-10 lol">
          {projects.map((elem, idx) => (
            <div key={idx} className="hero w-full h-[400px] mb-2 flex gap-2">
              <ProjectCard
                Image1={elem.image1}
                Image2={elem.image2}
                title1={elem.title1}
                year1={elem.year1}
                alt1={elem.altText1}
                title2={elem.title2}
                year2={elem.year2}
                alt2={elem.altText2}
                setInfo={setInfo} // ✅ pass setter
              />
            </div>
          ))}
        </div>
      </div>
        <ButtonShowcase />
    </>
  );
}
