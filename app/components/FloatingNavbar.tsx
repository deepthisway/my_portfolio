"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { cn } from "@/lib/utils"
import {
  IconHome,
  IconUser,
  IconCode,
  IconBriefcase,
  IconMail,
  IconTools,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react"

export default function FloatingNavbar() {
  const [activeSection, setActiveSection] = useState("home")
  const { scrollYProgress } = useScroll()
  const [visible, setVisible] = useState(false)

  // Handle scroll visibility
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - (scrollYProgress.getPrevious() ?? 0)

      if (scrollYProgress.get() < 0.05) {
        setVisible(false)
      } else {
        if (direction < 0) {
          setVisible(true)
        } else {
          setVisible(false)
        }
      }
    }
  })

  // Handle active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "contact"]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <IconHome className="h-4 w-4" />,
      section: "home",
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4" />,
      section: "about",
    },
    {
      name: "Skills",
      link: "#skills",
      icon: <IconTools className="h-4 w-4" />,
      section: "skills",
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <IconCode className="h-4 w-4" />,
      section: "projects",
    },
    {
      name: "Experience",
      link: "#experience",
      icon: <IconBriefcase className="h-4 w-4" />,
      section: "experience",
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <IconMail className="h-4 w-4" />,
      section: "contact",
    },
  ]

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black/80 bg-white/80 backdrop-blur-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
        )}
      >
        {navItems.map((navItem, idx) => (
          <button
            key={`link=${idx}`}
            onClick={() => scrollToSection(navItem.link)}
            className={cn(
              "relative items-center flex space-x-1 transition-colors duration-200",
              activeSection === navItem.section
                ? "text-blue-500 dark:text-blue-400"
                : "text-neutral-600 dark:text-neutral-50 dark:hover:text-neutral-300 hover:text-neutral-500",
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm font-medium">{navItem.name}</span>
            {activeSection === navItem.section && (
              <motion.div
                layoutId="activeSection"
                className="absolute inset-x-0 w-full mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        ))}

        {/* Social Links */}
        <div className="flex items-center space-x-2 ml-2 pl-2 border-l border-neutral-200 dark:border-white/[0.2]">
          <a
            href="https://github.com/deepthisway"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200"
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/deepanshu-sirohi-415269219/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200"
          >
            <IconBrandLinkedin className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
          </a>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => scrollToSection("#contact")}
          className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors duration-200"
        >
          <span>Hire Me</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </button>
      </motion.div>
    </AnimatePresence>
  )
}
