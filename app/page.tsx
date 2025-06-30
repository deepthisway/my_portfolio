"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeProvider } from "next-themes"
import FloatingNavbar from "./components/FloatingNavbar"
import ThemeToggle from "./components/ThemeToggle"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import SkillsSection from "./components/SkillsSection"
import ProjectsSection from "./components/ProjectsSection"
import ExperienceSection from "./components/ExperienceSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="relative min-h-screen bg-black overflow-hidden">
        <FloatingNavbar />
        <ThemeToggle />

        <AnimatePresence>
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ExperienceSection />
            <ContactSection />
            <Footer />
          </motion.main>
        </AnimatePresence>
      </div>
    </ThemeProvider>
  )
}
