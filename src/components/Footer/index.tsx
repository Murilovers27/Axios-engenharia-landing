import "./style.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__grid">
          {/* Identidade */}
          <div className="footer__brand">
            <p className="footer__logo">Axios Engenharia</p>
            <p className="footer__description">
              Engenharia orientada para impacto. Desenvolvimento de produtos,
              processos e soluções industriais sob medida.
            </p>
          </div>

          {/* Navegação */}
          <div className="footer__nav">
            <p className="footer__title">Navegação</p>
            <ul>
              <li>
                <a href="#solucoes">
                  Soluções
                </a>
              </li>
              <li>
                <a href="#processo">
                  Processo
                </a>
              </li>
              <li>
                <a href="#parceiros">
                  Parceiros
                </a>
              </li>
              <li>
                <a href="#industrias">
                  Indústrias
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="footer__contact">
            <p className="footer__title">Contato</p>
            <p className="footer__text">
              Fale diretamente com nossos engenheiros.
            </p>
            <a
              href="https://wa.me/55XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__cta"
            >
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>
          © {new Date().getFullYear()} Axios Engenharia. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
