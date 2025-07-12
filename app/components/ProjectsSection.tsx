"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, ArrowRight, Star, Calendar, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PinContainer } from "@/components/ui/3d-pin"
import Image from "next/image"

export default function ProjectsSection() {
  const projects = [
    {
      title: "Evenly",
      description:
        "Evenely is a fully responsive expense-splitting web application modeled after Splitwise.",
      image: "/makemepro.png",
      tech: ["Next JS", "Convex", "Inngest", "Shadcn UI"],
      liveUrl: "https://evenly-next.vercel.app/",
      githubUrl: "https://github.com/deepthisway/evenly-next.git",
      featured: true,
      status: "Live",
      year: "2025",
      gradient: "from-blue-500 via-purple-500 to-pink-500",
    },
    {
      title: "MentorMile",
      description:
        "A personalized career platform that helps users explore industries, track latest trends, access job market insights (roles, salaries, growth), and prepare for interviews with AI-generated quizzes and reviews. Features include resume generation and ATS refinement, as well as AI-crafted cover letters—tailored to the user's skills and industry interests.",
      image: "/makemepro.png",
      tech: ["Next JS", "Neon DB", "Inngest"],
      liveUrl: "https://mentormile.vercel.app/",
      githubUrl: "https://github.com/deepthisway/mentormile.git",
      featured: true,
      status: "Live",
      year: "2025",
      gradient: "from-blue-500 via-purple-500 to-pink-500",
    },
    {
      title: "Make Me Pro",
      description:
        "A full-stack study pltform solution with NextJs, React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image: "/makemepro.png",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      liveUrl: "https://makemepro.in",
      githubUrl: "https://github.com/deepthisway/makemepro.git",
      featured: true,
      status: "Live",
      year: "2024",
      gradient: "from-blue-500 via-purple-500 to-pink-500",
    },
    {
      title: "Transcript Generator",
      description:
        "A Next.js app that generates college transcripts from user data. Features include real-time data validation, PDF generation, and user-friendly interface.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Next.js", "PostgreSQL", "Socket.io", "Framer Motion"],
      liveUrl: "https://transcript-generator-five.vercel.app",
      githubUrl: "https://github.com/deepthisway/Transcript-Generator.git",
      featured: false,
      status: "Live",
      year: "2024",
      gradient: "from-green-500 via-teal-500 to-blue-500",
    },
    {
      title: "Portfolio Website",
      description:
        "A stunning portfolio website with smooth animations, dark mode, and responsive design. Built with Next.js and Framer Motion.",
      image: "/",
      tech: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
      liveUrl: "https://deepportfolio-one.vercel.app",
      githubUrl: "https://github.com/deepanshu/portfolio",
      featured: true,
      status: "Live",
      year: "2024",
      gradient: "from-cyan-500 via-blue-500 to-purple-500",
    },
    {
      title: "Blog Platform",
      description:
        "A modern blog platform with MDX support, dark mode, and SEO optimization. Built with Next.js and Contentlayer.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Next.js", "MDX", "Contentlayer", "Tailwind CSS"],
      liveUrl: "https://blog-platform-demo.vercel.app",
      githubUrl: "https://github.com/deepanshu/blog-platform",
      featured: false,
      status: "Live",
      year: "2023",
      gradient: "from-purple-500 via-violet-500 to-blue-500",
    },
    {
      title: "Chat Application",
      description:
        "Real-time chat application with rooms, file sharing, and emoji support. Built with Socket.io and React.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["React", "Socket.io", "Node.js", "MongoDB"],
      liveUrl: "https://chat-app-demo.vercel.app",
      githubUrl: "https://github.com/deepanshu/chat-app",
      featured: false,
      status: "Development",
      year: "2024",
      gradient: "from-emerald-500 via-green-500 to-teal-500",
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-gradient-to-br from-gray-50/50 via-blue-50/30 to-purple-50/50 dark:from-gray-900/50 dark:via-blue-900/20 dark:to-purple-900/20"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium border border-blue-200 dark:border-blue-800 mb-6"
          >
            <Code className="h-4 w-4" />
            Featured Projects
            <Star className="h-4 w-4" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            My Work Portfolio
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work and personal projects that demonstrate my skills and passion for development
          </p>
        </motion.div>

        {/* Featured Projects with 3D Pin Effect */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-[25rem] w-full flex items-center justify-center"
            >
              <PinContainer title={project.liveUrl} href={project.liveUrl}>
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                  {/* Status Badge */}
                  <div className="absolute top-2 right-2">
                    <Badge
                      className={`text-xs ${
                        project.status === "Live"
                          ? "bg-green-500/20 text-green-400 border-green-500/30"
                          : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                      }`}
                    >
                      {project.status}
                    </Badge>
                  </div>

                  {/* Project Title */}
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">{project.title}</h3>

                  {/* Project Year */}
                  <div className="flex items-center gap-1 mb-2">
                    <Calendar className="h-3 w-3 text-slate-400" />
                    <span className="text-xs text-slate-400">{project.year}</span>
                  </div>

                  {/* Project Description */}
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500 text-sm leading-relaxed">
                      {project.description.slice(0, 200)}...
                    </span>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1 mt-3 mb-4">
                    {project.tech.slice(0, project.tech.length).map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-blue-500/20 text-blue-300 border-blue-500/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {/* {project.tech.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-gray-500/20 text-gray-300 border-gray-500/30">
                        +{project.tech.length - 3}
                      </Badge>
                    )} */}
                  </div>

                  {/* Project Image/Gradient */}
                  <div className={`flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br ${project.gradient}`} />
                  {/* <Image src="/makemepro.png" height={200} width={200} alt="image" /> */}
                  {/* Action Buttons */}
                  <div className="flex justify-between items-center mt-4 pt-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-normal text-slate-300 hover:text-white transition-colors duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      

                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="h-3 w-3" />
                      Code
                    </a>
                  </div>
                </div>
              </PinContainer>
            </motion.div>
          ))}
        </div>

        {/* Other Projects with Compact Pin Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
            Other Notable Projects
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-[20rem] w-full flex items-center justify-center"
            >
              <PinContainer title={project.liveUrl} href={project.liveUrl}>
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[16rem] h-[16rem]">
                  {/* Status Badge */}
                  <div className="absolute top-2 right-2">
                    <Badge
                      className={`text-xs ${
                        project.status === "Live"
                          ? "bg-green-500/20 text-green-400 border-green-500/30"
                          : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                      }`}
                    >
                      {project.status}
                    </Badge>
                  </div>

                  {/* Project Title */}
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold text-sm text-slate-100">{project.title}</h3>

                  {/* Project Year */}
                  <div className="flex items-center gap-1 mb-2">
                    <Calendar className="h-3 w-3 text-slate-400" />
                    <span className="text-xs text-slate-400">{project.year}</span>
                  </div>

                  {/* Project Description */}
                  <div className="text-sm !m-0 !p-0 font-normal">
                    <span className="text-slate-500 text-xs leading-relaxed">
                      {project.description.slice(0, 80)}...
                    </span>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1 mt-2 mb-3">
                    {project.tech.slice(0, 2).map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-blue-500/20 text-blue-300 border-blue-500/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 2 && (
                      <Badge variant="secondary" className="text-xs bg-gray-500/20 text-gray-300 border-gray-500/30">
                        +{project.tech.length - 2}
                      </Badge>
                    )}
                  </div>

                  {/* Project Image/Gradient */}
                  <div className={`flex flex-1 w-full rounded-lg mt-2 bg-gradient-to-br ${project.gradient}`} />

                  {/* Action Buttons */}
                  <div className="flex justify-between items-center mt-3 pt-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-2 py-1 rounded text-xs font-normal text-slate-300 hover:text-white transition-colors duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="h-3 w-3" />
                      Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-2 py-1 rounded bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="h-3 w-3" />
                      Code
                    </a>
                  </div>
                </div>
              </PinContainer>
            </motion.div>
          ))}
        </div>

        {/* View More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          {/* <Button
            variant="outline"
            size="lg"
            className="px-8 py-3 rounded-full font-medium border-2 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-200 group bg-transparent"
          >
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button> */}
        </motion.div>
      </div>
    </section>
  )
}
