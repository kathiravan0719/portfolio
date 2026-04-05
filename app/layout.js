import './globals.css'
import { ThemeProvider } from '../components/ThemeProvider'
import CustomCursor from '../components/CustomCursor'

export const metadata = {
  title: 'Kathiravan D — Full Stack Developer',
  description: 'Building scalable MERN applications with real-time and AI features',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased selection:bg-cyan-500/30">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
