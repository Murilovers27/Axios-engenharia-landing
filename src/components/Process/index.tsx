import "./style.css"

export default function Process() {
  return (
    <section id="processo" className="process">
      <div className="container">
        <div className="process__header">
          <span className="process__eyebrow">Processo</span>
          <h2 className="process__title">
            Como atuamos em cada projeto
          </h2>
          <p className="process__text">
            Nosso método garante clareza técnica, previsibilidade e controle
            em todas as etapas do projeto.
          </p>
        </div>

        <div className="process__grid">
          <div className="process-card">
            <span className="process-card__step">01</span>
            <h3>Entendimento do desafio</h3>
            <p>
              Análise técnica inicial para compreender o problema real,
              objetivos e restrições do cliente.
            </p>
          </div>

          <div className="process-card">
            <span className="process-card__step">02</span>
            <h3>Engenharia e projeto</h3>
            <p>
              Desenvolvimento da solução, definição de escopo, cronograma
              e documentação técnica.
            </p>
          </div>

          <div className="process-card">
            <span className="process-card__step">03</span>
            <h3>Implementação</h3>
            <p>
              Acompanhamento da execução para garantir aderência ao projeto
              e qualidade da entrega.
            </p>
          </div>

          <div className="process-card">
            <span className="process-card__step">04</span>
            <h3>Suporte contínuo</h3>
            <p>
              Atuação como parceiro técnico, oferecendo suporte e evolução
              das soluções ao longo do tempo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}