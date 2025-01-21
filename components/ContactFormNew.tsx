"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { toast } from "sonner"

// Définition du schéma de validation
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Le nom doit contenir au moins 2 caractères.",
  }),
  email: z.string().email({
    message: "Veuillez entrer une adresse email valide.",
  }),
  subject: z.string().min(3, {
    message: "L'objet doit contenir au moins 3 caractères.",
  }),
  message: z.string().min(10, {
    message: "Le message doit contenir au moins 10 caractères.",
  }),
})

export function ContactFormNew() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    mode: "onTouched",
    reValidateMode: "onBlur",
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi du message")
      }

      form.reset()
      toast.success("Message envoyé avec succès !")
    } catch (error) {
      console.error("Erreur:", error)
      toast.error("Une erreur est survenue lors de l'envoi.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-6"
      >
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom Prénom</FormLabel>
                <FormControl>
                  <Input
                    placeholder="John Doe"
                    {...field}
                    disabled={isSubmitting}
                  />
                </FormControl>
                {field.value && form.formState.touchedFields.name && (
                  <FormMessage />
                )}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="john@example.com"
                    type="email"
                    {...field}
                    disabled={isSubmitting}
                  />
                </FormControl>
                {field.value && form.formState.touchedFields.email && (
                  <FormMessage />
                )}
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-4">
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Objet</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Sujet de votre message"
                    {...field}
                    disabled={isSubmitting}
                  />
                </FormControl>
                {field.value && form.formState.touchedFields.subject && (
                  <FormMessage />
                )}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Votre message..."
                    className="min-h-[150px]"
                    {...field}
                    disabled={isSubmitting}
                  />
                </FormControl>
                {field.value && form.formState.touchedFields.message && (
                  <FormMessage />
                )}
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full bg-green-400 hover:bg-green-500"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Envoi en cours..." : "Envoyer"}
          </Button>
        </div>
      </form>
    </Form>
  )
}
