import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

import { Header } from '@/components/header'
import { Sidebar } from '@/components/Sidebar'




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <div className="w-full h-screen flex flex-col ">
            
            <div className="w-full flex h-full ">
              <div className="w-[270px]  bg-cor8 ">
                  <Sidebar />
              </div>
              <div className=" flex-1 bg-cor6">
               <div className='flex flex-col gap-3'>
                <div className='h-14 '><Header /></div>
                <div className='flex-1'>
                {children}
                </div>
             
               </div>
              </div>
            </div>
          </div>
     
        </body>
    </html>
  )
}
