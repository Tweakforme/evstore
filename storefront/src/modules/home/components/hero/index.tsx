"use client"

import { Button, Heading } from "@medusajs/ui"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

const backgroundImages = [
  "/images/hero-1.jpg",
  "/images/hero-2.jpg",
  "/images/hero-3.jpg",
]

const Hero = () => {
  const [current, setCurrent] = useState(0)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % backgroundImages.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-black to-slate-800">
      {/* Dynamic background carousel */}
      {backgroundImages.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt={`Hero ${i + 1}`}
          fill
          className={`object-cover absolute inset-0 transition-all duration-2000 ease-in-out ${
            current === i ? "opacity-60 scale-105" : "opacity-0 scale-100"
          }`}
          priority={i === 0}
        />
      ))}

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/60 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10" />

      {/* Static decorative elements */}
      <div className="absolute inset-0 z-15 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400/30 rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400/30 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-purple-400/30 rounded-full animate-pulse" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/20 rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />
      </div>

      {/* Main content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
        <div className={`transform transition-all duration-1500 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          
          {/* Brand badge */}
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 sm:mb-8 animate-pulse">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full mr-2 animate-ping" />
            <span className="text-xs sm:text-sm font-medium text-white/90 tracking-wider">PREMIUM EV PARTS</span>
          </div>

          {/* Main heading with gradient text */}
          <div className="mb-4 sm:mb-6">
            <Heading
              level="h1"
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-3 sm:mb-4 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight"
            >
              EVStore
            </Heading>
            <div className="w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto rounded-full mb-4 sm:mb-6" />
            <Heading
              level="h2"
              className="text-base sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-200 max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed px-2"
            >
              Elevate your Tesla experience with premium accessories and OEM components
            </Heading>
          </div>

          {/* CTA buttons with glassmorphism */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mt-8 sm:mt-12 w-full max-w-md sm:max-w-none">
            <Link href="/ca/categories/model-3" passHref>
              <Button className="group relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-medium transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-2xl w-full sm:w-auto">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Model 3
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </Link>

            <Link href="/ca/categories/model-y" passHref>
              <Button className="group relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-medium transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-2xl w-full sm:w-auto">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Model Y
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </Link>

            <Link href="/ca/store" passHref>
              <Button className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-medium transition-all duration-300 hover:from-emerald-400 hover:to-blue-500 hover:scale-105 hover:shadow-2xl w-full sm:w-auto">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Browse All
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Button>
            </Link>
          </div>

          {/* Feature highlights */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 mt-12 sm:mt-16 text-xs sm:text-sm text-gray-300">
            <div className="flex items-center justify-center gap-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full" />
              <span>Premium Quality</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full" />
              <span>Fast Shipping</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full" />
              <span>Expert Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden sm:block">
        <div className="flex flex-col items-center text-white/60">
          <span className="text-xs mb-2 tracking-wider">EXPLORE</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent relative">
            <div className="absolute top-0 w-px h-4 bg-white animate-pulse" />
          </div>
        </div>
      </div>

      {/* Carousel indicators */}
      <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 z-20 flex gap-2">
        {backgroundImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              current === i ? 'bg-white w-6 sm:w-8' : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default Hero