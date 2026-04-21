import "./style.css"

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg-shape hero__bg-shape--top" />
      <div className="hero__bg-shape hero__bg-shape--bottom" />

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__eyebrow">Engenharia orientada para impacto</span>

          <h1 className="hero__title">
            Soluções industriais com
            <span> método, clareza e resultado.</span>
          </h1>

          <p className="hero__text">
            Desenvolvemos produtos, processos e projetos sob medida para
            operações que exigem precisão técnica, previsibilidade e execução
            responsável.
          </p>

          <div className="hero__actions">
            <a
              href="https://wa.me/5515996355935"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__button hero__button--primary"
            >
              Falar com um engenheiro
            </a>

            <a href="#solucoes" className="hero__button hero__button--secondary">
              Ver soluções
            </a>
          </div>

          <div className="hero__highlights">
            <div className="hero__highlight">
              <strong>Projetos</strong>
              <span>sob medida</span>
            </div>

            <div className="hero__highlight">
              <strong>Execução</strong>
              <span>com método</span>
            </div>

            <div className="hero__highlight">
              <strong>Suporte</strong>
              <span>contínuo</span>
            </div>
          </div>
        </div>

        <div className="hero__media">
          <div className="hero__media-circle" />

          <div className="hero__media-card">
            <img
              src="/images/hero-1.jpg"
              alt="Projeto industrial"
              className="hero__image"
            />

            <div className="hero__badge">Engenharia industrial</div>

            <div className="hero__floating-card hero__floating-card--top">
              <span>Desenvolvimento</span>
              <strong>Produto e processo</strong>
            </div>

            <div className="hero__floating-card hero__floating-card--bottom">
              <span>Atuação técnica</span>
              <strong>Planejamento, projeto e acompanhamento</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}