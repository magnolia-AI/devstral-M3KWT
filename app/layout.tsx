import './globals.css'
import './portfolio.css'
import type { Metadata } from 'next'
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'John Doe | Full Stack Developer Portfolio',
  description: 'Professional portfolio showcasing web development projects, skills, and experience',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="h-full flex flex-col antialiased">
        <ThemeProvider defaultTheme="light" attribute="class">
          <main className="flex-1">
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

