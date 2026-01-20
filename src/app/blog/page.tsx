"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import ButtonShowcase from "../(home)/components/ButtonShowcase";
import Navbar from "../(home)/components/Navbar";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Blog data (you can add more here)
  const blogs = [
    {
      id: 1,
      category: "Culture",
      image:
        "https://k72.ca/uploads/caseStudies/OSM/thumbnail_OSM_1280-1280x960.jpg",
      title: "LOREM IPSUM DOLOR SIT, AMET CONSECTETUR ADIPISICING ELIT.",
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, officiis doloribus. Totam esse voluptas alias quos nihil quidem, aut dicta iure harum eum perspiciatis asperiores, molestiae nesciunt et. Similique, aliquam.",
    },
    {
      id: 2,
      category: "Tech",
      image:
        "https://k72.ca/uploads/caseStudies/SollioAg/thumbnailimage_SollioAg-1280x960.jpg",
      title: "LOREM IPSUM DOLOR SIT, AMET CONSECTETUR ADIPISICING ELIT.",
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, officiis doloribus. Totam esse voluptas alias quos nihil quidem, aut dicta iure harum eum perspiciatis asperiores, molestiae nesciunt et. Similique, aliquam.",
    },
    {
      id: 3,
      category: "Design",
      image:
        "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
      title: "LOREM IPSUM DOLOR SIT, AMET CONSECTETUR ADIPISICING ELIT.",
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, officiis doloribus. Totam esse voluptas alias quos nihil quidem, aut dicta iure harum eum perspiciatis asperiores, molestiae nesciunt et. Similique, aliquam.",
    },
    {
      id: 4,
      category: "Tech",
      image:
        "https://k72.ca/uploads/caseStudies/FRUITE/Fruite_thumbnail_bbq-1280x960.jpg",
      title: "LOREM IPSUM DOLOR SIT, AMET CONSECTETUR ADIPISICING ELIT.",
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, officiis doloribus. Totam esse voluptas alias quos nihil quidem, aut dicta iure harum eum perspiciatis asperiores, molestiae nesciunt et. Similique, aliquam.",
    },
    {
      id: 5,
      category: "Tech",
      image:
        "https://k72.ca/uploads/caseStudies/FRUITE/Fruite_thumbnail_bbq-1280x960.jpg",
      title: "LOREM IPSUM DOLOR SIT, AMET CONSECTETUR ADIPISICING ELIT.",
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, officiis doloribus. Totam esse voluptas alias quos nihil quidem, aut dicta iure harum eum perspiciatis asperiores, molestiae nesciunt et. Similique, aliquam.",
    },
    {
      id: 6,
      category: "Culture",
      image:
        "https://k72.ca/uploads/caseStudies/FRUITE/Fruite_thumbnail_bbq-1280x960.jpg",
      title: "LOREM IPSUM DOLOR SIT, AMET CONSECTETUR ADIPISICING ELIT.",
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, officiis doloribus. Totam esse voluptas alias quos nihil quidem, aut dicta iure harum eum perspiciatis asperiores, molestiae nesciunt et. Similique, aliquam.",
    },
  ];

  // Filter
  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  return (
    <>
      <Navbar/>
      <div className="pt-[5vh] p-4">
        {/* Heading */}
        <div className="pt-[20vh]">
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            className="font-medium text-[9.5vw] uppercase mb-3 relative"
          >
            blogs
            <sup className=" absolute top-17 align-super text-[2.5vw]">
              {filteredBlogs.length}
            </sup>
          </motion.h1>
        </div>

        <div className="max-w-[95vw] m-auto border border-gray-600 mb-6"></div>

        {/* Filter buttons */}
        <div className="flex font-medium text-xl gap-6 mb-10 uppercase">
          {["All", "Tech", "Culture", "Design"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`w-[100px] h-[50px] rounded-xl ${
                selectedCategory === cat
                  ? "bg-black text-white"
                  : "bg-gray-200 text-black hover:bg-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
          {filteredBlogs.map((blog) => (
            <div key={blog.id} className="mb-10">
              {/* Image */}
              <div className="relative w-full h-[500px] rounded-[30px] overflow-hidden group">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="opacity-0 group-hover:opacity-100 absolute top-0 flex items-end justify-center  left-0 w-full h-full bg-black/30 transition-opacity duration-300">
                  <h2 className=" text-white text-2xl font-medium m-10  ">
                    {blog.summary}
                  </h2>
                </div>
              </div>
              {/* Title */}
              <h2 className="uppercase font-medium text-4xl mt-4 hover:underline cursor-pointer">
                {blog.title}
              </h2>
              {/* Category */}
              <button className="mt-2 w-20 px-2 py-1 text-xl font-medium bg-gray-200 rounded-xl hover:bg-gray-300">
                {blog.category}
              </button>
            </div>
          ))}
        </div>
      </div>
      <ButtonShowcase/>
    </>
  );
}
