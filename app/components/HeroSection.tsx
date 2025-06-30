"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision"
import { SparklesCore } from "@/components/ui/sparkles"
import ColourfulText from "./ui/colourful-text"
import { ContainerTextFlip } from "./ui/container-text-flip"

export default function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const greetingWords = [
    {
      text: "Hi,",
      className: "text-white",
    },
    {
      text: "I'm",
      className: "text-white",
    },
  ]

  const roleWords = [
    {
      text: "MERN",
      className: "text-blue-400",
    },
    {
      text: "&",
      className: "text-white",
    },
    {
      text: "Next.js",
      className: "text-purple-400",
    },
    {
      text: "Developer",
      className: "text-blue-400",
    },
  ]

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background Beams with Collision */}
      <BackgroundBeamsWithCollision className="min-h-screen">
        <div className="relative z-20 text-center max-w-6xl mx-auto px-4">
          {/* Animated Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            {/* <span className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm text-gray-300 rounded-full text-sm font-medium border border-white/10">
              👋 Welcome to my portfolio
            </span> */}
          </motion.div>
          {/* Greeting Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-6"
          >
            <span className="text-sm px-3 py-1">
              <ContainerTextFlip
                className="text-sm"
                words={["Hi, I am", "मैं हूँ", "Bonjour, je suis"]}
              />
            </span>
          </motion.div>

          {/* Metallic Name with Sparkles */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mb-8 relative"
          >
            {/* Sparkles Background */}
            <div className="absolute inset-0 w-full h-full">
              <div className="w-full h-40 relative">
                {/* Gradients */}
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px w-1/4" />

                {/* Core sparkles component */}
                <SparklesCore
                  background="transparent"
                  minSize={0.4}
                  maxSize={1}
                  particleDensity={700}
                  className="w-full h-full"
                  particleColor="#FFFFFF"
                />

                {/* Radial Gradient to prevent sharp edges */}
                <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_center,transparent_20%,white)]" />
              </div>
            </div>

            {/* Name Text */}
            <div className="flex">
              <h1 className="metallic-text text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight relative z-10">
                Deepanshu &nbsp;
              </h1>
              <h1 className="metallic-text text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight relative z-10">
                Sirohi
              </h1>
            </div>
          </motion.div>

          {/* Role Description with Typewriter Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2 }}
            className="mb-8"
          >
            <TypewriterEffectSmooth
              words={roleWords}
              className="text-xl md:text-2xl lg:text-3xl leading-tight justify-center"
              cursorClassName="bg-blue-400 h-6 sm:h-8 xl:h-10"
            />
          </motion.div>

          {/* Static Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 5 }}
            className="mb-12"
          >
            <p className="text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              I craft exceptional digital experiences with modern web
              technologies ...
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 5.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-xl group"
            >
              Contact Me
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              onClick={scrollToProjects}
              variant="outline"
              size="lg"
              className="px-8 py-3 rounded-full font-medium border-2 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-200 bg-transparent"
            >
              View Projects
            </Button>

            <a href="/resume.pdf" download>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 rounded-full font-medium border-2 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-200 bg-transparent"
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 6 }}
            className="flex justify-center space-x-6"
          >
            {[
              {
                icon: Github,
                href: "https://github.com/deepthisway",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/deepanshu-sirohi-415269219/",
                label: "LinkedIn",
              },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="p-3 rounded-full bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-200 border border-white/10"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </BackgroundBeamsWithCollision>
    </section>
  );
}
