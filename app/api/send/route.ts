import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

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

    return NextResponse.json(data)
  } catch (error) {
    console.error("Erreur complète:", error)
    return NextResponse.json({ error: "Error sending email" }, { status: 500 })
  }
}
