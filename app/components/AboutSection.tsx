"use client"

import { motion } from "framer-motion"
import { Code, Coffee, Gamepad2, Music } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { BackgroundBeams } from "./ui/background-beams-demo"

export default function AboutSection() {
  const funFacts = [
    { icon: Code, text: "1+ years of coding experience", color: "text-white" },
    { icon: Coffee, text: "Coffee enthusiast ☕", color: "text-gray-300" },
    { icon: Gamepad2, text: "Reading in free time 🎮", color: "text-gray-300" },
    { icon: Music, text: "Music lover 🎵", color: "text-gray-300" },
  ]

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      <BackgroundBeams className="min-h-screen absolute inset-0 z-0" />
      <div className="max-w-6xl mx-auto my-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            About Me
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-lg prose-invert">
              <p className="text-gray-300 leading-relaxed">
                I'm a MCA graduate from NIT Kurukshetra, Haryana and full-stack
                developer with expertise in the MERN stack and Next.js. I love
                creating digital experiences that are not only functional but
                also beautiful and intuitive.
              </p>

              <p className="text-gray-300 leading-relaxed">
                My journey in web development started with curiosity and has
                evolved into a deep passion for crafting scalable, performant
                applications. I'm always eager to learn new technologies and
                tackle challenging problems.
              </p>

              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or enjoying a good cup of
                coffee while planning my next project.
              </p>
            </div>

            {/* Skills Summary */}
            {/* <div className="flex flex-wrap gap-2 mt-6">
              {["React", "Node.js", "MongoDB", "Express", "Next.js", "TypeScript", "Tailwind CSS", "Docker"].map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm font-medium border border-gray-700"
                >
                  {skill}
                </motion.span>
              ))}
            </div> */}
          </motion.div>

          {/* Fun Facts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">
              Fun Facts About Me
            </h3>

            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card className="border-0 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-200">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <fact.icon className={`h-6 w-6 ${fact.color}`} />
                      <span className="text-gray-300 font-medium">
                        {fact.text}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Stats */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              {[
                { number: "10+", label: "Projects Completed" },
                { number: "1+", label: "Years Experience" },
                { number: "100%", label: "Client Satisfaction" },
                { number: "24/7", label: "Learning Mode" },
              ].map((stat, index) => (
                <Card key={index} className="text-center p-4 border-0 bg-gray-900/50 backdrop-blur-sm">
                  <CardContent className="p-2">
                    <div className="text-2xl font-bold text-white">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
