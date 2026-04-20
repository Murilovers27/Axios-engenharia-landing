import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Axios Engenharia',
  description: 'Soluções em engenharia, automação e desenvolvimento de produtos industriais.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col antialiased">
        {/* Header global */}
        <Header />

        {/* Conteúdo das páginas / seções */}
        <main className="flex-1 w-full overflow-x-hidden">
          {children}
        </main>

        {/* Footer global */}
        <Footer />
      </body>
    </html>
  )
}