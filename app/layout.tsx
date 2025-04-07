import React from 'react'
import type { Metadata } from 'next'
import './globals.css'
import i18n from '../src/i18n'

export const metadata: Metadata = {
  title: 'NextPixel - Digitalna agencija za web i softverska rješenja',
  description: 'Digitalna agencija specijalizirana za web razvoj, dizajn i softverska rješenja',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang={i18n.language}>
      <body>
        {children}
      </body>
    </html>
  )
}
