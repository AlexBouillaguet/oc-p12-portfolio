// src/components/Footer.tsx
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Alexandre Bouillaguet. All Rights
          Reserved.
        </p>
        <div className="flex space-x-4">
          <Link
            href="https://github.com"
            target="_blank"
            className="text-sm hover:text-primary"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            className="text-sm hover:text-primary"
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:alexandre@example.com"
            className="text-sm hover:text-primary"
          >
            Email
          </Link>
        </div>
      </div>
    </footer>
  )
}
