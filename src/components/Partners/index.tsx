import "./style.css"

export default function Partners() {
  return (
    <section id="parceiros" className="partners">
      <div className="partners__overlay" />

      <div className="container partners__inner">
        <div className="partners__header">
          <h2 className="partners__title">Nossos Parceiros</h2>
          <p className="partners__text">
            Construímos parcerias sólidas com empresas e instituições que
            compartilham do nosso compromisso com qualidade técnica,
            responsabilidade e resultados consistentes.
          </p>
        </div>

        <div className="partners__logos">
  <a
    href="https://www.schaeffler.com.br/pt/"
    target="_blank"
    rel="noopener noreferrer"
    className="partners__logo-card"
  >
    <img src="/images/Partners/parceiro-1.png" alt="Parceiro 1" />
  </a>

  <a
    href="https://www.reckitt.com/br/sobre-nos/quem-somos/"
    target="_blank"
    rel="noopener noreferrer"
    className="partners__logo-card"
  >
    <img src="/images/Partners/parceiro-2.svg" alt="Parceiro 2" />
  </a>

  <a
    href="https://www.clarios.com/pt"
    target="_blank"
    rel="noopener noreferrer"
    className="partners__logo-card partners__logo-card--large"
  >
    <img src="/images/Partners/parceiro-3.png" alt="Parceiro 3" />
  </a>

  <a
    href="https://kg2engenharia.com.br/#contato"
    target="_blank"
    rel="noopener noreferrer"
    className="partners__logo-card"
  >
    <img src="/images/Partners/parceiro-4.png" alt="Parceiro 4" />
  </a>

  <a
    href="https://www.parceiro5.com.br"
    target="_blank"
    rel="noopener noreferrer"
    className="partners__logo-card"
  >
    <img src="/images/Partners/parceiro-5.png" alt="Parceiro 5" />
  </a>
</div>

      </div>
    </section>
  )
}
