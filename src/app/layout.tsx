import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProviders } from './theme.provider'
import AuthContext from '@/context/AuthContext'
import ToasterContext from '@/context/ToasterContext'
import MainLayout from '@/components/Layout/MainLayout'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'StaShoe',
  description: 'Shoe Ecommerce Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (

    <html lang="en">

      <body className={`bg-gray-200 dark:bg-[#191D20] ${inter.className}`} >
        <AuthContext>
          <ThemeProviders>
            <ToasterContext />
            <MainLayout>
              {children}
            </MainLayout>
          </ThemeProviders>
        </AuthContext>
      </body>
    </html >
  )
}
