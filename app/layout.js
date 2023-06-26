import MediaScroller from '@/components/MediaScroller'
import './globals.css'
import Nav from '@/components/Nav'

export const metadata = {
  title: "Joshua Ling's Portfolio",
  description: 'Portfolio made using NextJs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='gradient'>
        
        <div className='main'>
        <Nav/>
        </div>
        <MediaScroller/>
        {children}
      </body>
    </html>
  )
}
