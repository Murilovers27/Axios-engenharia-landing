"use client"

import Link from "next/link"
import { useState } from "react"
import "./style.css"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header__inner">
        <div className="header__brand">
          <span className="header__brand-mark" />
          <Link href="/" className="header__logo">
            Axios Engenharia
          </Link>
        </div>

        <nav className="header__nav">
          <a href="#solucoes" className="header__link">
            Soluções
          </a>
          <a href="#processo" className="header__link">
            Processo
          </a>
          <a href="#parceiros" className="header__link">
            Parceiros
          </a>
          <a href="#industrias" className="header__link">
            Indústrias
          </a>
        </nav>

        <a
          href="https://wa.me/55XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="header__cta"
        >
          Contato
        </a>

        <button
          className="header__menu-button"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="header__mobile">
          <div className="container header__mobile-inner">
            <a
              href="#solucoes"
              className="header__mobile-link"
              onClick={() => setOpen(false)}
            >
              Soluções
            </a>
            <a
              href="#processo"
              className="header__mobile-link"
              onClick={() => setOpen(false)}
            >
              Processo
            </a>
            <a
              href="#parceiros"
              className="header__mobile-link"
              onClick={() => setOpen(false)}
            >
              Parceiros
            </a>
            <a
              href="#industrias"
              className="header__mobile-link"
              onClick={() => setOpen(false)}
            >
              Indústrias
            </a>

            <a
              href="https://wa.me/55XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="header__mobile-cta"
            >
              Falar com um engenheiro
            </a>
          </div>
        </div>
      )}
    </header>
  )
}