"use client"
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className='dark:bg-dark-background'>
        {children}
      </body>
    </html>
  )
}
