import "./style.css"

export default function Solutions() {
  return (
    <section id="solucoes" className="solutions">
      <div className="container">
        <div className="solutions__header">
          <span className="solutions__eyebrow">Soluções</span>
          <h2 className="solutions__title">
            Engenharia aplicada a desafios reais
          </h2>
          <p className="solutions__text">
            Atuamos com soluções industriais sob medida, combinando método,
            experiência técnica e foco em resultado.
          </p>
        </div>

        <div className="solutions__grid">
          <article className="solution-card">
            <h3>Desenvolvimento de Produtos</h3>
            <p>
              Criação e validação de produtos industriais com foco em
              viabilidade técnica e produtiva.
            </p>
          </article>

          <article className="solution-card">
            <h3>Automação e Máquinas Especiais</h3>
            <p>
              Projetos de máquinas, dispositivos e sistemas automatizados
              personalizados.
            </p>
          </article>

          <article className="solution-card">
            <h3>Otimização de Processos</h3>
            <p>
              Análise e melhoria de processos industriais para ganho de
              eficiência e redução de perdas.
            </p>
          </article>

          <article className="solution-card">
            <h3>Gestão de Projetos</h3>
            <p>
              Acompanhamento técnico completo, garantindo prazo, escopo e
              qualidade da entrega.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}