"use client"
import {useState} from "react"

import {User2,QrCode,School,
    School2,BarChart,LayoutDashboard,
    HomeIcon,LogOut,ChevronRight,ChevronDown
} from 'lucide-react'
import Link from 'next/link'

export function Sidebar(){
    const [userchevronRight,setUserchavronRight]=useState(true)
    const [userchevronDown,setUserChevronDown]=useState(false)
    const [bibichevronRight,setBibichavronRight]=useState(true)
    const [bibichevronDown,setBibiChevronDown]=useState(false)
    const [cursochevronRight,setCursochavronRight]=useState(true)
    const [cursochevronDown,setCursoChevronDown]=useState(false)
    const [qrchevronRight,setQrchavronRight]=useState(true)
    const [qrchevronDown,setQrChevronDown]=useState(false)
    const [relchevronRight,setRelchavronRight]=useState(true)
    const [relchevronDown,setRelChevronDown]=useState(false)
    const [dashchevronRight,setDashchavronRight]=useState(true)
    const [dashchevronDown,setDashChevronDown]=useState(false)
  
    function changeuserChavronVisibity(){
        setUserchavronRight(!userchevronRight)
        setUserChevronDown(!userchevronDown)
    }
    function changeBibiChavronVisibity(){
        setBibiChevronDown(!bibichevronDown)
        setBibichavronRight(!bibichevronRight)
    }
    function changeCursoChavronVisibity(){
        setCursochavronRight(!cursochevronRight)
        setCursoChevronDown(!cursochevronDown)
    }
    function changeQrChavronVisibity(){
        setQrchavronRight(!qrchevronRight)
        setQrChevronDown(!qrchevronDown)
    }
    function changeRelChavronVisibity(){
        setRelchavronRight(!relchevronRight)
        setRelChevronDown(!relchevronDown)
    }
    function changeDashChavronVisibity(){
        setDashchavronRight(!dashchevronRight)
        setDashChevronDown(!dashchevronDown)
    }

    return(
        <div className="h-full overflow-y-auto text-slate-300">
            <ul className="p-2 w-full ">
                <li className="group">
                    <Link href="/">
                        <div className="flex gap-4 items-center p-2 hover:bg-corsidehover hover:text-cor0 cursor-pointer">
                            <HomeIcon />
                            <span>Home</span>
                        </div>
                    </Link>
                </li>
          
                <li className="group w-[240px]" onClick={changeQrChavronVisibity}>
                    <div className="flex justify-between  items-center p-2 hover:bg-corsidehover cursor-pointer">
                        <div className="flex gap-4 items-center">
                            <QrCode />
                            <span>qrcode</span>
                        </div>
                        <div style={{display:qrchevronRight?"flex":"none"}}>
                            <ChevronRight />
                        </div>
                        <div style={{display:qrchevronDown?"flex":"none"}}>
                            <ChevronDown />
                        </div>
                        
                    </div>
                    <ul className="mx-12 flex flex-col "  style={{display:qrchevronDown?"flex":"none"}}>
                        <Link href="/qrcode">
                            <li className="p-2 hover:bg-cor3 hover:cursor-pointer">gerar qrcode</li>
                        </Link>
                        <Link href="/scanner">
                        <li className="p-2 hover:bg-cor3 hover:cursor-pointer">ler qrcode</li>
                        </Link>
                        
                    </ul>
                </li>
                <li className="group">
                    <div className="flex gap-4 items-center p-2 hover:bg-corsidehover cursor-pointer">
                        <LogOut />
                        <span>Sair</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}