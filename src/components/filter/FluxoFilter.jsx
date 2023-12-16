
"use client"

import {useState,useEffect} from "react"

import { SelectCompont } from "../Select"

const perfis=["estudante","docente","outro"]
const  instituicoes=["udm","outra"]

export function FluxoFilterComponent({eventVisivleFilter,eventFilter}){

   const [instituicao,setInstituicao]=useState("")
   const [perfil,setPerfil]=useState("")

   useEffect(()=>{
    if(instituicao || perfil){
        eventFilter({instituicao,perfil})
    }
   },[instituicao,perfil])

   function desfazer(){
   alert("clicou em desfazr")
   }


    return(
        <div className="w-full h-full border-2 border-slate-400 rounded p-2 bg-slate-500">
            <h1 className="text-xltext-white font-bold border-b text-center">filtrar  uduarios</h1>
            <div className="m-2 flex flex-col gap-2">
                <div>
                    <label className="text-white">instituicao</label>
                   <SelectCompont values={instituicoes} value={instituicao} setValue={setInstituicao} />
                </div>
                <div>
                    <label className="text-white">perfil</label>
                   <SelectCompont values={perfis} value={perfil} setValue={setInstituicao} />
                </div>
                <div>
                    <button onClick={desfazer}  className="bg-slate-100 p-2 w-full rounded-sm  focus:border
                    border-orange-500 placeholder:text-sm placeholder:text-gray-400
                    ">desfazer</button>
                </div>
                <div>
                    <button onClick={eventVisivleFilter} className="bg-slate-100 p-2 w-full rounded-sm  focus:border
                    border-orange-500 placeholder:text-sm placeholder:text-gray-400
                    ">fechar</button>
                </div>
            </div>
        </div>
    )
}