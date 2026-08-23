import './globals.css'
import CustomCursor from '../components/CustomCursor'

export const metadata = {
  title: 'KathirDev — Websites That Grow Your Business',
  description: 'Building scalable MERN applications with real-time and AI features',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" style={{ backgroundColor: '#000000' }} suppressHydrationWarning>
      <body
        className="antialiased selection:bg-cyan-500/30 selection:text-white"
        style={{ backgroundColor: '#000000', color: '#ffffff', minHeight: '100vh' }}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
