import './globals.css'
import CustomCursor from '../components/CustomCursor'

export const metadata = {
  title: 'KATHIR.DEV | Full Stack Developer & Freelance Web Developer',
  description:
    'Kathiravan is a Chennai-based full stack developer building modern websites, web applications and AI-powered digital experiences for businesses, startups and professionals.',
  keywords: [
    'freelance web developer Chennai',
    'full stack developer India',
    'business website development',
    'MERN stack developer',
    'Next.js developer',
    'AI web applications',
    'website design Chennai',
  ],
  authors: [{ name: 'Kathiravan D', url: 'https://kathir.dev' }],
  openGraph: {
    title: 'KATHIR.DEV | Full Stack Developer & Freelance Web Developer',
    description:
      'Kathiravan is a Chennai-based full stack developer building modern websites, web applications and AI-powered digital experiences for businesses, startups and professionals.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'KATHIR.DEV',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KATHIR.DEV | Full Stack Developer & Freelance Web Developer',
    description:
      'Kathiravan is a Chennai-based full stack developer building modern websites, web applications and AI-powered digital experiences for businesses, startups and professionals.',
  },
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
