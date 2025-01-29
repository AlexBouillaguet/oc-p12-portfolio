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

// Schéma de validation du formulaire avec Zod
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

  // Initialisation du formulaire avec react-hook-form et Zod
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  // Fonction de soumission du formulaire
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
        className="flex flex-col lg:grid lg:grid-cols-2 gap-6"
      >
        <div className="space-y-4">
          {/* Champ de formulaire pour le nom */}
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
                    autoComplete="name"
                  />
                </FormControl>
                {form.formState.isSubmitted && form.formState.errors.name && (
                  <FormMessage>
                    {form.formState.errors.name.message}
                  </FormMessage>
                )}
              </FormItem>
            )}
          />
          {/* Champ de formulaire pour l'email */}
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
                    autoComplete="email"
                  />
                </FormControl>
                {form.formState.isSubmitted && form.formState.errors.email && (
                  <FormMessage>
                    {form.formState.errors.email.message}
                  </FormMessage>
                )}
              </FormItem>
            )}
          />
          {/* Champ de formulaire pour l'objet */}
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
                    autoComplete="off"
                  />
                </FormControl>
                {form.formState.isSubmitted &&
                  form.formState.errors.subject && (
                    <FormMessage>
                      {form.formState.errors.subject.message}
                    </FormMessage>
                  )}
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-6">
          {/* Champ de formulaire pour le message */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Votre message..."
                    className="min-h-[212px]"
                    {...field}
                    disabled={isSubmitting}
                  />
                </FormControl>
                {form.formState.isSubmitted &&
                  form.formState.errors.message && (
                    <FormMessage>
                      {form.formState.errors.message.message}
                    </FormMessage>
                  )}
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="text-black hover:bg-green-600"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Envoi en cours..." : "Envoyer"}
          </Button>
        </div>
      </form>
    </Form>
  )
}
