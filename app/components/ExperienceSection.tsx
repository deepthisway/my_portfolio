"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, ExternalLink, Code, Award, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { TracingBeam } from "@/components/ui/tracing-beam"

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Make Me Pro",
      location: "Canada",
      period: "2024 - 2025",
      description:
        "Developed and maintained a Educational Platform projects using modern web technologies. Collaborated with design teams to create pixel-perfect, responsive user interfaces.",
      achievements: [
        "Reduced bug reports by 50% through comprehensive testing",
        "Enhanced user engagement by 30% with improved UI/UX",
      ],
      tech: ["Next JS","React", "Express.js", "MongoDB", "Tailwind CSS"],
      website: "makemepro.in",
      badge: "Full Stack",
      image: "/makemepro.png?height=400&width=600",
    },
    // {
    //   title: "Frontend Developer",
    //   company: "WebAgency Pro",
    //   location: "New York, NY",
    //   period: "2021 - 2022",
    //   description:
    //     "Specialized in creating responsive, accessible web applications with focus on user experience and performance optimization.",
    //   achievements: [
    //     "Delivered 20+ client projects on time and within budget",
    //     "Improved website loading speeds by 35% on average",
    //     "Implemented accessibility standards achieving WCAG 2.1 compliance",
    //   ],
    //   tech: ["React", "JavaScript", "CSS3", "Webpack", "Figma"],
    //   website: "#",
    //   badge: "Frontend",
    //   image: "/placeholder.svg?height=400&width=600",
    // },
  ]

  const education = [
    {
      title: "Masters in Computer Application",
      institution: "National Institute of Technology, Kurukshetra",
      period: "2023-2026",
      description: "Graduated and Specialized in web development and software engineering.",
      badge: "Education",
    },
    {
      title: "AWS Certified Developer",
      institution: "Amazon Web Services",
      period: "2024",
      description: "Certified in developing and maintaining applications on AWS platform.",
      badge: "Certification",
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full text-gray-300 text-sm font-medium border border-gray-700 mb-6"
          >
            <TrendingUp className="h-4 w-4" />
            Professional Journey
            <Award className="h-4 w-4" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Work Experience</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey and the impact I've made in the tech industry
          </p>
        </motion.div>

        {/* Experience Timeline with TracingBeam */}
        <TracingBeam className="px-6">
          <div className="max-w-2xl mx-auto antialiased pt-4 relative">
            {experiences.map((experience, index) => (
              <motion.div
                key={`experience-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                {/* Badge */}
                <h2 className="bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-full text-sm w-fit px-4 py-1 mb-4 font-medium">
                  {experience.badge}
                </h2>

                {/* Job Title */}
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">{experience.title}</h3>

                {/* Company and Details */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                  <div className="flex items-center space-x-2 text-gray-300">
                    <span className="font-semibold text-lg">{experience.company}</span>
                    <ExternalLink
                      className="h-4 w-4 cursor-pointer hover:scale-110 transition-transform text-gray-400 hover:text-white"
                      onClick={() => window.open(experience.website, "_blank")}
                    />
                  </div>
                  <div className="flex flex-col md:items-end space-y-1">
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar className="h-4 w-4 mr-1" />
                      {experience.period}
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <MapPin className="h-4 w-4 mr-1" />
                      {experience.location}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="text-sm prose prose-sm prose-invert max-w-none">
                  {experience?.image && (
                    <img
                      src={experience.image || "/placeholder.svg"}
                      alt="work environment"
                      height="400"
                      width="600"
                      className="rounded-lg mb-6 object-cover w-full h-48"
                    />
                  )}

                  <p className="text-gray-300 leading-relaxed mb-6">{experience.description}</p>

                  {/* Key Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                      <Award className="h-4 w-4" />
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <motion.li
                          key={achievementIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 + achievementIndex * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-2 text-gray-300"
                        >
                          <span className="text-gray-500 mt-1">•</span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {experience.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-gray-800/50 text-gray-300 border-gray-700 text-xs hover:bg-gray-700/50 transition-colors"
                      >
                        <Code className="h-3 w-3 mr-1" />
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Education & Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-20"
            >
              <h3 className="text-2xl font-bold mb-8 text-white">Education & Certifications</h3>

              {education.map((item, index) => (
                <div key={`education-${index}`} className="mb-12">
                  {/* Badge */}
                  <h2 className="bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-full text-sm w-fit px-4 py-1 mb-4 font-medium">
                    {item.badge}
                  </h2>

                  {/* Title */}
                  <h4 className="text-xl font-bold mb-2 text-white">{item.title}</h4>

                  {/* Institution and Period */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <span className="text-gray-300 font-medium">{item.institution}</span>
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar className="h-4 w-4 mr-1" />
                      {item.period}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="text-sm prose prose-sm prose-invert max-w-none">
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </TracingBeam>
      </div>
    </section>
  )
}
