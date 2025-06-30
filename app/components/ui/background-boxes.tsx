"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = new Array(150).fill(1)
  const cols = new Array(100).fill(1)
  const colors = [
    "#3B82F6", // blue-500
    "#8B5CF6", // violet-500
    "#06B6D4", // cyan-500
    "#10B981", // emerald-500
    "#F59E0B", // amber-500
    "#EF4444", // red-500
    "#EC4899", // pink-500
    "#6366F1", // indigo-500
    "#84CC16", // lime-500
  ]

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)]
  }

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute -top-1/4 left-1/4 z-0 flex h-full w-full -translate-x-1/2 -translate-y-1/2 p-4",
        className,
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div key={`row` + i} className="relative h-8 w-16 border-l border-slate-700 dark:border-slate-600">
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: `${getRandomColor()}`,
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`col` + j}
              className="relative h-8 w-16 border-t border-r border-slate-700 dark:border-slate-600"
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="pointer-events-none absolute -top-[14px] -left-[22px] h-6 w-10 stroke-[1px] text-slate-700 dark:text-slate-600"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  )
}

export const Boxes = React.memo(BoxesCore)
