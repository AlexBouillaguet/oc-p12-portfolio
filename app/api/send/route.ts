import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

async function validateTurnstileToken(token: string) {
  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
      }),
    }
  )

  return res.json()
}

export async function POST(request: Request) {
  try {
    const { name, email, subject, message, token } = await request.json()

    // Vérifier le token Turnstile
    const validation = await validateTurnstileToken(token)
    if (!validation.success) {
      return NextResponse.json({ error: "Invalid captcha" }, { status: 400 })
    }

    console.log("Turnstile vérifié, envoi email...")
    const data = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["alexandre.bouillaguet@gmail.com"],
      subject: `Message Portfolio: ${subject}`,
      html: `
        <h2>Nouveau message de votre portfolio</h2>
        <p><strong>De:</strong> ${name} (${email})</p>
        <p><strong>Objet:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    console.log("Réponse Resend:", data)
    return NextResponse.json(data)
  } catch (error) {
    console.error("Erreur complète:", error)
    return NextResponse.json({ error: "Error sending email" }, { status: 500 })
  }
}
