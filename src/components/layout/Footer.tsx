import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-slate-50">
      <div className="container py-12 grid gap-8 md:grid-cols-3">
        {/* Coluna 1 – Identidade */}
        <div className="space-y-4">
          <p className="font-bold text-lg">Axios Engenharia</p>
          <p className="text-sm text-slate-600 max-w-xs">
            Engenharia orientada para impacto. Desenvolvimento de produtos,
            processos e soluções industriais sob medida.
          </p>
        </div>

        {/* Coluna 2 – Navegação */}
        <div className="space-y-3">
          <p className="font-medium">Navegação</p>
          <ul className="space-y-2 text-sm">
            <li><a href="#solucoes">Soluções</a></li>
            <li><a href="#industrias">Indústrias</a></li>
            <li><a href="#processo">Processo</a></li>
          </ul>
        </div>

        {/* Coluna 3 – Contato */}
        <div className="space-y-3">
          <p className="font-medium">Contato</p>
          https://wa.me/55XXXXXXXXXX
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-slate-200 py-4">
        <p className="text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Axios Engenharia. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
