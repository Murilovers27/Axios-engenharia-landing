import "./stayle.css"

export default function Contato() {
  return (
    <main className="team">
      <div className="container team__inner">
        <header className="team__header">
          <h1>Conte com um time de especialistas</h1>
          <a href="#" className="team__cta">
            
          </a>
        </header>

        <section className="team__grid">
          {/* Engenheiro 1 */}
          <article className="team-card">
            <div className="team-card__image">
              /* <img src="/images/Eng/luiz.jpg" alt="Engenheiro responsável" /> */
            </div>

            <span className="team-card__role">Engenheiro</span>
            <h2 className="team-card__name">Engenheiro Responsável</h2>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="team-card__linkedin"
              aria-label="LinkedIn"
            >
              in
            </a>
          </article>

          {/* Engenheiro 2 */}
          <article className="team-card">
            <div className="team-card__image">
               <img src="/images/Eng/Nicolau.jpg" alt="Engenheiro responsável" /> 
            </div>

            <span className="team-card__role">Engenheiro</span>
            <h2 className="team-card__name">Engenheiro Responsável</h2>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="team-card__linkedin"
              aria-label="LinkedIn"
            >
              in
            </a>
          </article>
        </section>
      </div>
    </main>
  )
}