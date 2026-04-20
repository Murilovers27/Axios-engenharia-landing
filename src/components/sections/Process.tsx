export default function Process() {
  return (
    <section id="processo" className="w-full">
      <div className="container py-20">
        {/* Cabeçalho da seção */}
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl font-bold md:text-4xl">
            Como atuamos
          </h2>
          <p className="mt-4 text-slate-600">
            Atuamos de forma estruturada, transparente e colaborativa para garantir
            soluções de engenharia alinhadas aos objetivos do negócio.
          </p>
        </div>

        {/* Etapas do processo */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="text-sm font-semibold text-slate-500">01</span>
            <h3 className="mt-2 font-semibold text-lg">Entendimento do desafio</h3>
            <p className="mt-3 text-sm text-slate-600">
              Analisamos o contexto técnico e operacional para compreender o
              problema real, os objetivos e as restrições do projeto.
            </p>
          </div>

          <div>
            <span className="text-sm font-semibold text-slate-500">02</span>
            <h3 className="mt-2 font-semibold text-lg">Engenharia e projeto</h3>
            <p className="mt-3 text-sm text-slate-600">
              Desenvolvemos a solução técnica, definindo escopo, cronograma,
              desenhos e requisitos para uma execução segura e eficiente.
            </p>
          </div>

          <div>
            <span className="text-sm font-semibold text-slate-500">03</span>
            <h3 className="mt-2 font-semibold text-lg">Implementação e acompanhamento</h3>
            <p className="mt-3 text-sm text-slate-600">
              Acompanhamos a execução do projeto, garantindo aderência ao
              planejamento, suporte técnico contínuo e ajustes quando necessários.
            </p>
          </div>

          <div>
            <span className="text-sm font-semibold text-slate-500">04</span>
            <h3 className="mt-2 font-semibold text-lg">Parceria contínua</h3>
            <p className="mt-3 text-sm text-slate-600">
              Atuamos como extensão da equipe do cliente, oferecendo suporte
              recorrente para evoluir soluções e processos ao longo do tempo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

