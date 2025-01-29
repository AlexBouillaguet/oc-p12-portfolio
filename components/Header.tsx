import Link from "next/link"

const Header = () => {
  return (
    <header className="flex justify-center items-center p-4 ">
      <div className="flex justify-between items-center w-full max-w-6xl">
        <Link href="/">
          <div>Alexandre Bouillaguet</div>
        </Link>

        <nav className="space-x-4 md:space-x-10 ml-10">
          <Link
            href="/#projets"
            className="hover:text-muted-foreground transition-colors"
          >
            Projets
          </Link>
          <Link
            href="/#contact"
            className="hover:text-muted-foreground transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
