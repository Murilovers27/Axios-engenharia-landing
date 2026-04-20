import Link from "next/link"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200">
      <div className="container h-16 flex items-center justify-between">
        {/* Logo / Identidade */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-axios-black"
        >
          Axios
        </Link>

        {/* Navegação */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
          <a
            href="#solucoes"
            className="hover:text-axios-red transition-colors"
          >
            Soluções
          </a>

          <a
            href="#processo"
            className="hover:text-axios-red transition-colors"
          >
            Processo
          </a>

          <a
            href="#industrias"
            className="hover:text-axios-red transition-colors"
          >
            Indústrias
          </a>
        </nav>

        {/* CTA */}
        <a
          href="https://wa.me/55XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="
            hidden sm:inline-flex
            items-center justify-center
            rounded-md
            bg-axios-red
            px-4 py-2
            text-sm font-medium text-white
            hover:opacity-90
            transition
          "
        >
          Falar com engenheiro
        </a>
      </div>
    </header>
  )
}