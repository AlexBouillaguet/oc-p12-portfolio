export default function Footer() {
  return (
    <footer className="flex justify-center items-center p-8 border-t border-gray-700">
      <div className="flex justify-center items-center w-full max-w-6xl">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Alexandre Bouillaguet. Tous droits réservés.
        </p>
        
      </div>
    </footer>
  )
}
