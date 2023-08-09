"use client"
import './globals.css'
import Providers from './providers'
import ThemeSwitcher from './ThemeSwitcher'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <Providers>
          <ThemeSwitcher />
          {children}
        </Providers>
      </body>
    </html>
  )
}
