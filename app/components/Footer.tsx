"use client"

import { motion } from "framer-motion"
import { Heart, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="py-12 px-4 border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-300"
          >
            <span>© {new Date().getFullYear()} Deepanshu. Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>and lots of coffee</span>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            {["Privacy", "Terms", "Sitemap"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </motion.div>

          {/* Back to Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="rounded-full p-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200 bg-transparent"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>

        {/* Tech Stack Credit */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center"
        >
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Built with Next.js, Tailwind CSS, Framer Motion, and ShadCN UI
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
