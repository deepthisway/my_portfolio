"use client"

import { motion } from "framer-motion"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed top-6 right-6 z-50"
    >
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="rounded-2xl p-4 backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300 shadow-2xl"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
            boxShadow: `
              0 8px 32px 0 rgba(31, 38, 135, 0.37),
              inset 0 1px 0 0 rgba(255, 255, 255, 0.1),
              0 0 0 1px rgba(255, 255, 255, 0.05)
            `,
          }}
        >
          <motion.div
            initial={false}
            animate={{ rotate: theme === "dark" ? 180 : 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-yellow-400 drop-shadow-lg" />
            ) : (
              <Moon className="h-5 w-5 text-blue-400 drop-shadow-lg" />
            )}
          </motion.div>
        </Button>
      </motion.div>
    </motion.div>
  )
}
