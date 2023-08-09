"use client"
import Header from './components/header/Header'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className='dark:bg-dark-background class'>
        <Header />
        {children}
      </body>
    </html>
  )
}
