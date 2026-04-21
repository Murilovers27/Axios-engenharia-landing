"use client"

import { useEffect, useState } from "react"
import "./style.css"

const images = [
  {
    src: "/images/Hero/hero-01.png",
    alt: "Projeto industrial",
    badge: "Engenharia industrial",
  },
  {
    src: "/images/Hero/hero-envase.jpg",
    alt: "Sistemas de envase",
    badge: "Sistemas de envase",
  },
  {
    src: "/images/Hero/Nicolau.jpg",
    alt: "Automação industrial",
    badge: "Automação industrial",
  },
  
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

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
    src={images[current].src}
    alt={images[current].alt}
    className="hero__image"
  />

  <div className="hero__badge">
    {images[current].badge}
  </div>

  <div className="hero__floating-card hero__floating-card--top">
    <span>Desenvolvimento</span>
    <strong>Produto e processo</strong>
  </div>

  <div className="hero__floating-card hero__floating-card--bottom">
    <span>Axios</span>
    <strong>
      Nos mostre teu desafio. Nós resolvemos.
    </strong>
  </div>
</div>

          {/* Indicadores */}
          <div className="hero__dots">
            {images.map((_, index) => (
              <button
                key={index}
                className={index === current ? "active" : ""}
                onClick={() => setCurrent(index)}
                aria-label={`Imagem ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}