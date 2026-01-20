"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star, ChevronRight, ChevronLeft } from "lucide-react"
import { services, servicesPageContent } from "@/lib/data"
import Navbar from "../(home)/components/Navbar"
import ButtonShowcase from "../(home)/components/ButtonShowcase"
import MaskedDiv from "@/components/ui/masked-div"
// import ThreeBackground from "@/components/ThreeBackground"

export default function Services() {
  const { header, custom, faq } = servicesPageContent
  const scrollContainerRef = useRef<HTMLDivElement | null>(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  
  // Refs with proper typing
  const sectionRefs = {
    header: useRef<HTMLDivElement | null>(null),
    services: useRef<HTMLDivElement | null>(null),
    custom: useRef<HTMLDivElement | null>(null),
    faq: useRef<HTMLDivElement | null>(null)
  }

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      setScrollPosition(scrollContainerRef.current.scrollLeft);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth' as ScrollBehavior
      });
      setScrollPosition(scrollContainerRef.current.scrollLeft + 300);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth' as ScrollBehavior
      });
      setScrollPosition(scrollContainerRef.current.scrollLeft - 300);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <main className="pt-4 pb-2">
      {/* 3D Background with reduced opacity */}
      <Navbar/>
      <div className="container mx-auto px-4 md:px-8">
        <div ref={sectionRefs.header}>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-white"
            dangerouslySetInnerHTML={{ __html: header.title }}
          />

          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
            {header.subtitle}
          </p>
        </div>

        <div ref={sectionRefs.services} className="relative mb-16">
          {/* Mobile view - stacked grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:hidden">
            {services.map((product, index) => (
              <div key={product.id} className={`product-card relative fade-in fade-in-delay-${index + 1}`}>
                {product.popular && (
                  <div className="absolute top-4 right-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full z-5 flex items-center">
                    <Star size={12} className="mr-1" fill="white" /> POPULAR
                  </div>
                )}
                <div className={`bg-gray-800 rounded-xl shadow-md shadow-white overflow-hidden h-full flex flex-col card-bg-${index + 1}`}>
                  <div className="relative h-48 image-container">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      fill
                      priority={index < 2}
                      className="object-cover hover-image"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-2 gradient-text">{product.title}</h3>
                    <p className="text-gray-400 mb-4 flex-grow">{product.description}</p>
                    <ul className="mb-6 space-y-2">
                      {product.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start text-gray-300"
                        >
                          <span className="text-primary mr-2">✓</span> {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto">
                      <Link
                        href="/contact"
                        className="button-hover inline-flex items-center justify-center w-full py-3 px-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl shadow-md shadow-white hover:opacity-90 transition-opacity"
                      >
                        Get Started <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop view with horizontal scroll and arrows */}
          <div className="hidden md:block relative">
            <div 
              ref={scrollContainerRef}
              className="flex space-x-6 overflow-x-auto scrollbar-hide py-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {services.map((product, index) => (
                <div key={product.id} className={`product-card relative flex-shrink-0 w-64 sm:w-72 md:w-80 fade-in fade-in-delay-${index + 1}`}>
                  {product.popular && (
                    <div className="absolute top-4 right-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full z-10 flex items-center">
                      <Star size={12} className="mr-1" fill="white" /> POPULAR
                    </div>
                  )}
                  <div className={`bg-gray-900 rounded-xl shadow-md shadow-white overflow-hidden h-full flex flex-col card-bg-${index + 1}`}>
                    <div className="relative h-48 image-container">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.title}
                        fill
                        priority={index < 2}
                        className="object-cover hover-image"
                      />
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold mb-2 gradient-text">{product.title}</h3>
                      <p className="text-gray-400 mb-4 flex-grow">{product.description}</p>
                      <ul className="mb-6 space-y-2">
                        {product.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-start text-gray-300"
                          >
                            <span className="text-primary mr-2">✓</span> {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-auto">
                        <Link
                          href="/contact"
                          className="button-hover inline-flex items-center justify-center w-full py-3 px-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl shadow-md shadow-white hover:opacity-90 transition-opacity"
                        >
                          Get Started <ArrowRight size={16} className="ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation arrows */}
            <button 
              onClick={scrollLeft}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-primary to-secondary text-white p-2 rounded-full transition-colors"
              style={{ display: scrollPosition > 0 ? 'block' : 'none' }}
            >
              <ChevronLeft size={28} />
            </button>
            
            <button 
              onClick={scrollRight}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-primary to-secondary text-white p-2 rounded-full transition-colors"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>

        <div
          ref={sectionRefs.custom}
          className="bg-gray-900 rounded-xl shadow-md shadow-white p-8 md:p-12 fade-in"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                {custom.title}
              </h2>
              <p className="text-gray-300 mb-6">{custom.description}</p>
              <div>
                <Link
                  href={custom.buttonLink}
                  className="button-hover inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl shadow-md shadow-white hover:opacity-90 transition-opacity"
                >
                  {custom.buttonText} <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
            <div
              className="relative h-full md:h-80 rounded-xl shadow-md overflow-hidden object-cover"
            >
              <MaskedDiv maskType="type-1" size={0.50} className="object-cover rotate-90">
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

        <div ref={sectionRefs.faq} className="mt-20">
          <h2 className="faq-title text-3xl md:text-5xl font-bold text-center mb-12 gradient-text">
            {faq.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faq.items.map((item, index) => (
              <div key={index} className={`fade-in fade-in-delay-${index + 1}`}>
                <div
                  className="faq-item bg-gray-900 p-6 rounded-xl shadow-md shadow-white product-card"
                >
                  <h3 className="text-xl font-bold mb-3 gradient-text">{item.question}</h3>
                  <p className="text-gray-300">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ButtonShowcase/>
    </main>
  );
}