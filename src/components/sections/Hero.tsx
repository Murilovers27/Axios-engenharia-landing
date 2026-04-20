import Link from 'next/link'

export default function Hero() {
  return (
    <section className="w-full">
      <div className="container py-20 md:py-28">
        <div className="max-w-2xl">
          <h1 className="text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
            Engenharia orientada para impacto
          </h1>
          <p className="mt-6 text-base md:text-lg text-slate-600">
            Nos mostre o desafio. Nós resolvemos.
            Desenvolvemos produtos, processos e soluções industriais sob medida.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            https://wa.me/55XXXXXXXXXX

            <a
              href="#solucoes"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md text-sm border border-slate-300"
            >
              Ver soluções
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
