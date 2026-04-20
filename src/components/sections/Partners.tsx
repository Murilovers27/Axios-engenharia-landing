export default function Partners() {
  return (
    <section id="parceiros" className="w-full bg-slate-50">
      <div className="container py-20">
        {/* Cabeçalho */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl font-bold md:text-4xl">
            Empresas que confiam na nossa engenharia
          </h2>
          <p className="mt-4 text-slate-600">
            Atuamos como parceiros técnicos de empresas que valorizam engenharia
            bem executada, previsibilidade e compromisso com resultado.
          </p>
        </div>

        {/* Grid de parceiros */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Parceiro */}
          <div className="flex items-center justify-center bg-white border border-slate-200 rounded-lg p-6">
            <span className="font-semibold text-slate-700">Makron LTDA</span>
          </div>

          {/* Placeholder para futuros parceiros */}
          <div className="flex items-center justify-center bg-white border border-dashed border-slate-300 rounded-lg p-6 text-slate-400 text-sm">
            Em breve
          </div>

          <div className="flex items-center justify-center bg-white border border-dashed border-slate-300 rounded-lg p-6 text-slate-400 text-sm">
            Em breve
          </div>
        </div>
      </div>
    </section>
  )
}
