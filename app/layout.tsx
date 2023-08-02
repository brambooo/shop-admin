import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ModalProvider } from '@/providers/modal-provider'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Admin dashboard',
  description: 'Admin dashboard',
}

/**
 * Server component
 * 
 * Wanneer we client-side components in server side component zetten, moeten we er zeker van zijn dat we 
 * geen hydration errors krijgen (kunnen ontstaan wanneer server & client componenten niet synchroon zijn met elkaar).
 * gebruiken we de isMounted oplossing voor, zie ModalProvider.
*/
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
