// src/components/ui/FuturisticBackground.tsx
'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export const FuturisticBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Gradient Mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-transparent to-fuchsia-500/20" />
      
      {/* Animated Grid */}
      <div 
        className="absolute inset-0 opacity-20"
        // style={{
        //   backgroundImage: `linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px),
        //                    linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px)`,
        //   backgroundSize: '50px 50px'
        // }}
      />

      {/* Glowing Orbs */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-500/30 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-40 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full filter blur-3xl animate-pulse delay-1000" />
      
      {/* Animated Lines */}
      {/* <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      >
        <svg width="100%" height="100%">
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </motion.div> */}
    </div>
  )
}