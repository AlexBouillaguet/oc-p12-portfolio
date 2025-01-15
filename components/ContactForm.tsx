"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Here you would typically send the form data to your backend
    // For this example, we'll just simulate a submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-6 w-full">
          <div className="flex flex-col space-y-2">
            <div className="flex flex-col space-y-1">
              <Label htmlFor="name">Nom Prénom</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border-gray-700"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border-gray-700"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex flex-col space-y-1">
              <Label htmlFor="subject">Objet</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="border-gray-700"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="h-32 border-gray-700"
                
              />
            </div>
            <Button className="w-20" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "En cours..." : "Envoyer"}
            </Button>
          </div>
        </div>
      </form>
      {submitSuccess && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">
          Merci pour votre message ! Je vous répondrai dès que possible.
        </div>
      )}
    </div>
  )
}
