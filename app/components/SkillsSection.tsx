"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Database, Settings, Palette, Star, TrendingUp, Box, Lock, Search, Sparkles } from "lucide-react"
import TechStackFeatures from "@/components/ui/tech-stack-features"

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      color: "from-gray-600 to-gray-800",
      bgColor: "from-gray-900/50 to-gray-800/50",
      skills: [
        { name: "React", level: 90, color: "bg-gray-600" },
        { name: "Next.js", level: 80, color: "bg-gray-700" },
        { name: "TypeScript", level: 80, color: "bg-gray-800" },
        { name: "Tailwind CSS", level: 90, color: "bg-gray-500" },
        { name: "Framer Motion", level: 80, color: "bg-gray-600" },
      ],
    },
    {
      title: "Backend Development",
      icon: Database,
      color: "from-gray-700 to-gray-900",
      bgColor: "from-gray-900/50 to-gray-800/50",
      skills: [
        { name: "Node.js", level: 90, color: "bg-gray-600" },
        { name: "Express.js", level: 85, color: "bg-gray-700" },
        { name: "MongoDB", level: 80, color: "bg-gray-500" },
        { name: "PostgreSQL", level: 75, color: "bg-gray-600" },
        { name: "REST APIs", level: 90, color: "bg-gray-800" },
      ],
    },
    {
      title: "Tools & DevOps",
      icon: Settings,
      color: "from-gray-600 to-gray-800",
      bgColor: "from-gray-900/50 to-gray-800/50",
      skills: [
        { name: "Github", level: 90, color: "bg-gray-600" },
        { name: "Docker", level: 70, color: "bg-gray-700" },
        { name: "AWS", level: 40, color: "bg-gray-500" },
        { name: "Vercel", level: 85, color: "bg-gray-600" },
        // { name: "Firebase", level: 80, color: "bg-gray-800" },
      ],
    },
    {
      title: "Design & Others",
      icon: Palette,
      color: "from-gray-700 to-gray-900",
      bgColor: "from-gray-900/50 to-gray-800/50",
      skills: [
        // { name: "Figma", level: 40, color: "bg-gray-600" },
        // { name: "UI/UX Design", level: 40, color: "bg-gray-700" },
        { name: "Responsive Design", level: 95, color: "bg-gray-500" },
        { name: "Performance Optimization", level: 85, color: "bg-gray-600" },
        { name: "SEO", level: 80, color: "bg-gray-800" },
      ],
    },
  ]

  // Technology Stack Features with Glowing Effect
  const techStackFeatures = [
    {
      title: "React & Next.js Mastery",
      description:
        "Building modern, scalable web applications with server-side rendering, static generation, and cutting-edge React patterns.",
      icon: <Box className="h-4 w-4 text-white" />,
      area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
    },
    {
      title: "TypeScript Excellence",
      description:
        "Type-safe development ensuring robust and maintainable code with enhanced developer experience and enterprise-grade reliability.",
      icon: <Settings className="h-4 w-4 text-white" />,
      area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
    },
    {
      title: "Full-Stack Architecture",
      description:
        "Creating high-performance backend services, RESTful APIs, and seamless database integrations with modern JavaScript runtime.",
      icon: <Lock className="h-4 w-4 text-white" />,
      area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
    },
    {
      title: "Cloud & DevOps Expertise",
      description:
        "Deploying and managing applications on AWS, Vercel, implementing CI/CD pipelines, and containerization with Docker.",
      icon: <Sparkles className="h-4 w-4 text-white" />,
      area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
    },
    {
      title: "Performance & Optimization",
      description:
        "Implementing best practices for web performance, SEO optimization, accessibility standards, and modern development tooling.",
      icon: <Search className="h-4 w-4 text-white" />,
      area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black">
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
            whileHover={{ y: -5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full text-gray-300 text-sm font-medium border border-gray-700 mb-6"
          >
            <Star className="h-4 w-4" />
            Skills & Expertise
            <TrendingUp className="h-4 w-4" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">Technical Arsenal</h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge technologies and tools I use to craft exceptional digital experiences
          </p>
        </motion.div>

        {/* Skills Categories Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card
                className={`h-full border-0 bg-gradient-to-br ${category.bgColor} backdrop-blur-sm hover:shadow-2xl transition-all duration-500 overflow-hidden relative border border-gray-800`}
              >
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent transform rotate-12 scale-150" />
                </div>

                <CardHeader className="pb-6 relative z-10">
                  <CardTitle className="flex items-center space-x-4 text-2xl">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`p-3 rounded-2xl bg-gradient-to-r ${category.color} shadow-lg`}
                    >
                      <category.icon className="h-7 w-7 text-white" />
                    </motion.div>
                    <span className="text-white font-bold">{category.title}</span>
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="space-y-3"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-white text-lg">{skill.name}</span>
                        <motion.span
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2 }}
                          viewport={{ once: true }}
                          className="text-sm font-bold text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full"
                        >
                          {skill.level}%
                        </motion.span>
                      </div>

                      <div className="relative">
                        <div className="h-3 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{
                              duration: 1.2,
                              delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                              ease: "easeOut",
                            }}
                            viewport={{ once: true }}
                            className={`h-full ${skill.color} rounded-full relative overflow-hidden`}
                          >
                            {/* Animated shine effect */}
                            <motion.div
                              animate={{ x: [-100, 200] }}
                              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                            />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Technology Stack Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">Technology Stack</h3>
          <p className="text-lg text-gray-400 text-center max-w-3xl mx-auto mb-12">
            Comprehensive overview of the technologies and frameworks I specialize in
          </p>
        </motion.div>

        {/* Technology Stack Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <TechStackFeatures />
        </motion.div>
ss
        {/* Stats Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "10+", label: "Projects Completed", icon: "🚀" },
            { number: "8+", label: "Technologies Mastered", icon: "⚡" },
            { number: "1+", label: "Years Experience", icon: "📈" },
            { number: "100%", label: "Client Satisfaction", icon: "⭐" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="text-center p-6 border-0 bg-gray-900/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 border border-gray-800">
                <CardContent className="p-0 space-y-2">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </section>
  )
}
