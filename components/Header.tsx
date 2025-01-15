import Link from "next/link"
import { ModeToggle } from "./ModeToggle"

const Header = () => {
  return (
    <header className="flex justify-center items-center p-4 ">
      <div className="flex justify-between items-center w-full max-w-6xl">
        <div className="text-xl font-bold">Alexandre Bouillaguet</div>
  
        <div className="flex justify-between items-center space-x-4">
          <nav className="space-x-4">
            <Link
              href="/projets"
              className="hover:text-muted-foreground transition-colors"
            >
              Projets
            </Link>
            <Link
              href="/contact"
              className="hover:text-muted-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header
