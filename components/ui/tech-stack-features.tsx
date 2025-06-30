import type React from "react"
import { cn } from "@/lib/utils"
import {
  IconBrandReact,
  IconBrandNextjs,
  IconBrandNodejs,
  IconDatabase,
  IconBrandTypescript,
  IconBrandTailwind,
  IconCloud,
  IconDeviceDesktop,
} from "@tabler/icons-react"

export default function TechStackFeatures() {
  const features = [
    {
      title: "React & Next.js",
      description: "Building modern, scalable web applications with server-side rendering and static generation.",
      icon: <IconBrandReact />,
    },
    {
      title: "TypeScript",
      description: "Type-safe development ensuring robust and maintainable code with enhanced developer experience.",
      icon: <IconBrandTypescript />,
    },
    {
      title: "Node.js & Express",
      description: "Creating high-performance backend services and RESTful APIs with modern JavaScript runtime.",
      icon: <IconBrandNodejs />,
    },
    {
      title: "Database Management",
      description: "Working with MongoDB, PostgreSQL, and other databases for efficient data storage and retrieval.",
      icon: <IconDatabase />,
    },
    {
      title: "Tailwind CSS",
      description: "Crafting beautiful, responsive user interfaces with utility-first CSS framework.",
      icon: <IconBrandTailwind />,
    },
    {
      title: "Cloud & DevOps",
      description: "Deploying and managing applications on AWS, Vercel, and implementing CI/CD pipelines.",
      icon: <IconCloud />,
    },
    {
      title: "Responsive Design",
      description: "Creating pixel-perfect, mobile-first designs that work seamlessly across all devices.",
      icon: <IconDeviceDesktop />,
    },
    {
      title: "Performance Optimization",
      description: "Implementing best practices for web performance, SEO optimization, and accessibility standards.",
      icon: <IconBrandNextjs />,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <TechFeature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  )
}

const TechFeature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string
  description: string
  icon: React.ReactNode
  index: number
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-gray-800",
        (index === 0 || index === 4) && "lg:border-l border-gray-800",
        index < 4 && "lg:border-b border-gray-800",
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-gray-900/50 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-gray-900/50 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-gray-400 group-hover/feature:text-blue-400 transition-colors duration-200">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-gray-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
          {title}
        </span>
      </div>
      <p className="text-sm text-gray-300 max-w-xs relative z-10 px-10">{description}</p>
    </div>
  )
}
