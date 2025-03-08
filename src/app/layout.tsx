import type { Metadata } from 'next'
import './globals.css'
import { Lato } from 'next/font/google'
import Header from '@/components/header'

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Itau Clone',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className={lato.className}>
      <Header />
      <body className="antialiased">{children}</body>
    </html>
  )
}
