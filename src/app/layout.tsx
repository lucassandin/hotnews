"use client"
import ThemeSwitcher from './ThemeSwitcher'
import './globals.css'
import Providers from './providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className='dark:bg-dark-background class'>
        <Providers>
          <ThemeSwitcher />
          {children}
        </Providers>
      </body>
    </html>
  )
}
