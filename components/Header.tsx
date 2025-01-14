import Link from "next/link"
import { ModeToggle } from "./ModeToggle"

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <div className="text-2xl font-bold">Alexandre Bouillaguet</div>

      <nav className="space-x-4">
        <Link
          href="/projets"
          className="text-lg hover:text-primary-foreground transition-colors"
        >
          Projets
        </Link>
        <Link
          href="/contact"
          className="text-lg hover:text-primary-foreground transition-colors"
        >
          Contact
        </Link>
      </nav>
      <ModeToggle />
    </header>
  )
}

export default Header
