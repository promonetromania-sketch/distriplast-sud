"use client"

import { useState } from "react"
import { Send } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (submitted) {
    return (
      <div className="bg-primary/10 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <Send className="w-8 h-8 text-primary-foreground" />
        </div>
        <h3 className="text-2xl font-semibold mb-2">Mesaj Trimis!</h3>
        <p className="text-muted-foreground">
          Mulțumim pentru mesaj. Te vom contacta în cel mai scurt timp posibil.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Nume Complet *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Ion Popescu"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Telefon *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="07XX XXX XXX"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="email@exemplu.ro"
        />
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2">
          Subiect *
        </label>
        <select
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">Selectează subiectul</option>
          <option value="oferta">Solicit ofertă</option>
          <option value="masuratori">Programare măsurători</option>
          <option value="service">Service / Reparații</option>
          <option value="reclamatie">Reclamație</option>
          <option value="altele">Altele</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Mesaj *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          placeholder="Descrie-ne cerințele tale..."
        />
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          "Se trimite..."
        ) : (
          <>
            <Send className="w-5 h-5" />
            Trimite Mesajul
          </>
        )}
      </button>
    </form>
  )
}
