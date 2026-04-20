export default function Industries() {
  return (
    <section id="industrias" className="w-full">
      <div className="container py-20">
        {/* Cabeçalho */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl font-bold md:text-4xl">
            Indústrias atendidas
          </h2>
          <p className="mt-4 text-slate-600">
            Atuamos em diferentes segmentos industriais, compreendendo as
            particularidades técnicas e operacionais de cada setor.
          </p>
        </div>

        {/* Grid de indústrias */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[
            'Alimentícia',
            'Farmacêutica',
            'Automotiva',
            'Agrícola',
            'Bens de Consumo',
            'Indústria Geral',
            'Energia e Mineração',
            'Tecnologia e Manufatura',
          ].map((industry) => (
            <div
              key={industry}
              className="border border-slate-200 rounded-lg p-4 text-sm font-medium text-slate-700 text-center"
            >
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}