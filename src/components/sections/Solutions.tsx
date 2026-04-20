export default function Solutions() {
  return (
    <section id="solucoes" className="w-full bg-slate-50">
      <div className="container py-20">
        {/* Cabeçalho da seção */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl font-bold md:text-4xl">
            Soluções em engenharia para desafios reais
          </h2>
          <p className="mt-4 text-slate-600">
            Atuamos do desenvolvimento à implementação, criando soluções industriais
            sob medida para otimizar desempenho, custo e eficiência.
          </p>
        </div>

        {/* Grid de soluções */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white p-6 border border-slate-200 rounded-lg">
            <h3 className="font-semibold text-lg">Desenvolvimento de Produtos</h3>
            <p className="mt-3 text-sm text-slate-600">
              Projetamos e desenvolvemos produtos industriais do conceito à validação
              técnica, sempre alinhados à viabilidade produtiva.
            </p>
          </div>

          <div className="bg-white p-6 border border-slate-200 rounded-lg">
            <h3 className="font-semibold text-lg">Automação e Máquinas Especiais</h3>
            <p className="mt-3 text-sm text-slate-600">
              Criamos máquinas, dispositivos e sistemas automatizados sob medida
              para linhas industriais, envase e inspeção.
            </p>
          </div>

          <div className="bg-white p-6 border border-slate-200 rounded-lg">
            <h3 className="font-semibold text-lg">Otimização de Processos</h3>
            <p className="mt-3 text-sm text-slate-600">
              Analisamos processos produtivos para identificar gargalos, reduzir
              desperdícios e aumentar a eficiência operacional.
            </p>
          </div>

          <div className="bg-white p-6 border border-slate-200 rounded-lg">
            <h3 className="font-semibold text-lg">Gestão de Projetos</h3>
            <p className="mt-3 text-sm text-slate-600">
              Atuamos como extensão da equipe do cliente, acompanhando projetos
              com foco em prazo, escopo e resultado.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
