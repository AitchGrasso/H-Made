'use client';

import { Inter } from 'next/font/google'
import { NhostProvider, NhostClient } from '@nhost/nextjs';
import { NhostApolloProvider } from '@nhost/react-apollo'

const inter = Inter({ subsets: ['latin'] })

const nhost = new NhostClient({
  subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN || '',
  region: process.env.NEXT_PUBLIC_NHOST_REGION || ''
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <NhostProvider nhost={nhost}>
            <NhostApolloProvider nhost={nhost}>
              {children}
            </NhostApolloProvider>
          </NhostProvider>
      </body>
    </html>
  )
}
