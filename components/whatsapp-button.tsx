"use client"

import { MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import { contactInfo } from "@/lib/navigation"

export function WhatsAppButton() {
  return (
    <motion.a
      href={contactInfo.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      aria-label="Contactează-ne pe WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </motion.a>
  )
}
