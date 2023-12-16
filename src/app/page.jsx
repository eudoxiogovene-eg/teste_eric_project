
'use client'
import {useEffect,useState} from "react"
import { Info_container } from "@/components/Info_container"
import { Estudante_periodo } from "@/components/Estudante_perido"
import { Progress_circle } from "@/components/Progress_circle"



import {Users,School2,PenBox,Activity,} from "lucide-react"


export default function HomePage() {


  
  const [usuariosCadastrados,setUsuariosCadastrados]=useState([])
  const [usuariosNaBiblioteca,setUsuariosNaBiblioteca]=useState([])
  const [entradas,setEntradas]=useState("")
  const [saidas,setSaidas]=useState([])

 



  return (
    <div className="w-full h-[95%]  flex flex-col p-3">
      
      <div className="grid grid-cols-4 gap-6">
          <Info_container Icon={PenBox} name=" cadastrados" number={10}  />
          <Info_container Icon={Users} name="usuarios na biblioteca" number={10}/>
          <Info_container Icon={Activity} name="entradas na biblioteca" number={10}/>
          <Info_container Icon={Users} name="saidas na biblioteca" number={10}/>
      </div>
      <div className="flex gap-3 h-full mt-8">
        <div className="flex-1">
          <Estudante_periodo />
        </div>
        <div className="w-[320px] grid grid-rows-3 gap-2">
          <Progress_circle name="estudantes na biblioteca" number={6} />
          <Progress_circle name="docentes na biblioteca " number={3} />
          <Progress_circle name="outros perfiles na biblioteca" number={90} />
        </div>
      </div>
     
    </div>
  )
}
