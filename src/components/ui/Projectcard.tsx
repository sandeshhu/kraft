"use client";
import Image from "next/image";

interface ProjectCardProps {
  Image1: string;
  Image2: string;
  title1: string;
  year1: number;
  alt1: string;
  title2: string;
  year2: number;
  alt2: string;
  setInfo: (value: { title: string; year: number; alt: string } | null) => void; // 👈 setter passed from parent
}

export default function ProjectCard({
  Image1,
  Image2,
  title1,
  year1,
  alt1,
  title2,
  year2,
  alt2,
  setInfo,
}: ProjectCardProps) {
  return (
    <>
     
      <div
        className="project-item w-1/2 group transition-all relative mr-1 overflow-hidden rounded-none hover:rounded-[50px]"
        onMouseEnter={() => setInfo({ title: title1, year: year1, alt: alt1 })}
        onMouseLeave={() => setInfo(null)}
      >
        <Image
          src={Image1}
          alt={alt1}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="opacity-0 group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 w-full h-full bg-black/30 transition-opacity duration-300">
          <h2 className="uppercase text-3xl md:text-6xl font-medium px-4  border-2 text-white border-white rounded-full text-center ">
            Voir le projet
          </h2>
        </div>
      </div>

      {/* Image 2 */}
      <div
        className="project-item w-1/2 group transition-all relative mr-1 overflow-hidden rounded-none hover:rounded-[50px]"
        onMouseEnter={() => setInfo({ title: title2, year: year2, alt: alt2 })}
        onMouseLeave={() => setInfo(null)}
      >
        <Image
          src={Image2}
          alt={alt2}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="opacity-0 group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 w-full h-full bg-black/30 transition-opacity duration-300">
          <h2 className="uppercase text-3xl md:text-6xl font-medium px-4  border-2 text-white border-white rounded-full text-center ">
            Voir le projet
          </h2>
        </div>
      </div>
      
    </>
  );
}
