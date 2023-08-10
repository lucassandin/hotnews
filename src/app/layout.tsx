import Header from './components/Header'
import { PostsProvider } from './context/PostContext'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="pt-br">
      <body className='dark:bg-dark-background class' suppressHydrationWarning={true}>
        <PostsProvider>
          <Header />
          {children}
        </PostsProvider>
      </body>
    </html>
  )
}
