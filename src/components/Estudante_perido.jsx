"use client"


const dados=[
    {
        perfil:"docente",
        numero:12,
    },
    {  
        perfil:"estudante",
        numero:23
    },
    {
        perfil:"outro",
        numero:20,
    },
]

import {VictoryPie} from 'victory'

export function Estudante_periodo(){
    return(
        <div className="w-full h-full bg-white rounded flex flex-col items-center ">
            usuarios na biblioteca por perfil
            <div className="mt-3">
            {dados.map((dado,key)=>(
                    <div key={key}>
                        {dado.carro}
                    </div>
                ))}

                <div className=" w-[500px] h-[370px] flex justify-center items-center">
                <VictoryPie
                data={dados}
                x="perfil"
                y="numero"
                innerRadius={0}
                />
                </div>
            </div>
        </div>
    )
}