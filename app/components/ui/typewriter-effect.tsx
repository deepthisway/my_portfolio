"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string
    className?: string
  }[]
  className?: string
  cursorClassName?: string
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const word = words[currentWordIndex]
    const fullText = word.text

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (currentText.length < fullText.length) {
            setCurrentText(fullText.substring(0, currentText.length + 1))
          } else {
            // Finished typing current word
            if (currentWordIndex < words.length - 1) {
              setTimeout(() => setIsDeleting(true), 1000)
            }
          }
        } else {
          // Deleting
          if (currentText.length > 0) {
            setCurrentText(currentText.substring(0, currentText.length - 1))
          } else {
            // Finished deleting
            setIsDeleting(false)
            setCurrentWordIndex((prev) => (prev + 1) % words.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentWordIndex, words])

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  const currentWord = words[currentWordIndex]

  return (
    <div className={cn("text-center", className)}>
      <motion.span className={cn("inline-block", currentWord.className)} key={currentWordIndex}>
        {currentText}
      </motion.span>
      <motion.span
        className={cn("inline-block ml-1 w-1 bg-current", cursorClassName)}
        animate={{
          opacity: showCursor ? 1 : 0,
        }}
        transition={{
          duration: 0,
        }}
        style={{
          height: "1em",
          verticalAlign: "baseline",
        }}
      />
    </div>
  )
}

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string
    className?: string
  }[]
  className?: string
  cursorClassName?: string
}) => {
  const [isComplete, setIsComplete] = useState(false)

  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }))

  // Calculate total animation duration
  const totalDuration = wordsArray.length * 0.3 + wordsArray.reduce((acc, word) => acc + word.text.length * 0.05, 0)

  useEffect(() => {
    const timer = setTimeout(
      () => {
        setIsComplete(true)
      },
      (totalDuration + 1) * 1000,
    )

    return () => clearTimeout(timer)
  }, [totalDuration])

  const renderWords = () => {
    return (
      <div className="inline-flex flex-wrap justify-center items-center gap-x-2 gap-y-1">
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-flex">
              {word.text.map((char, index) => (
                <motion.span
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.25,
                    delay: idx * 0.3 + index * 0.05,
                  }}
                  className={cn("inline-block", word.className)}
                  key={`char-${index}`}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
              {idx < wordsArray.length - 1 && <span className="inline-block">&nbsp;</span>}
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className={cn("flex justify-center items-center my-6", className)}>
      <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center">
        {renderWords()}
        {/* Cursor positioned right after the text */}
        <motion.span
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: isComplete ? [0, 1, 0] : 0,
          }}
          transition={{
            duration: 0.8,
            repeat: isComplete ? Number.POSITIVE_INFINITY : 0,
            repeatType: "loop",
            delay: totalDuration,
          }}
          className={cn("inline-block w-[4px] h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 bg-blue-500 ml-2", cursorClassName)}
          style={{
            verticalAlign: "text-bottom",
          }}
        />
      </div>
    </div>
  )
}
