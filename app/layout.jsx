import './globals.css'
import { Rubik } from 'next/font/google'
import Navbar from './components/Navbar'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'Decouverte Next 13',
  description: 'Ca a l air cool!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>

        <Navbar />

        {children}

        </body>
    </html>
  )
}
