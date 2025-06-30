"use client"

import { useEffect, useId, useState } from "react"
import { motion } from "framer-motion"

interface SparklesProps {
  id?: string
  className?: string
  background?: string
  particleSize?: number
  minSize?: number
  maxSize?: number
  particleDensity?: number
  particleColor?: string
}

export const SparklesCore = ({
  id,
  className,
  background = "transparent",
  minSize = 1,
  maxSize = 3,
  particleDensity = 120,
  particleColor = "#FFF",
}: SparklesProps) => {
  const [particles, setParticles] = useState<
    Array<{
      id: number
      x: number
      y: number
      size: number
      duration: number
      delay: number
    }>
  >([])

  const generateId = useId()
  const effectId = id || generateId

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = []
      for (let i = 0; i < particleDensity; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * (maxSize - minSize) + minSize,
          duration: Math.random() * 3 + 2,
          delay: Math.random() * 2,
        })
      }
      setParticles(newParticles)
    }

    generateParticles()
  }, [particleDensity, minSize, maxSize])

  return (
    <div
      className={className}
      style={{
        background,
      }}
    >
      <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
        {particles.map((particle) => (
          <motion.circle
            key={particle.id}
            cx={`${particle.x}%`}
            cy={`${particle.y}%`}
            r={particle.size}
            fill={particleColor}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  )
}
