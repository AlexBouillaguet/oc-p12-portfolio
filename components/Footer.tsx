// src/components/Footer.tsx
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="flex justify-center items-center p-8 border-t border-gray-700">
      <div className="flex justify-between items-center w-full max-w-6xl">
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
