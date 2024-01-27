import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

import Navbar from '@/components/Navbar'


export const metadata = {
  title: 'SSN IEEE PES',
  description: 'The official website IEEE Power Energy Society SSNCE Student Chapter',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
