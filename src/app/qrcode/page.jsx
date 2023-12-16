






"use client"

import { useState,useEffect } from 'react'



import { TableComponent } from "@/components/TableComponent"


import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



import QRCode from 'react-qr-code'
import qrCodelink from 'qrcode'



export default function QrcodePage(){

          
    const [nome,setNome]=useState("")
    const [sobrenome,setSobrenome]=useState("")
    const [instituicao,setinstituicao]=useState("")
    const [telefone,setTelefone]=useState("")
    const [email,setEmail]=useState("")
    const [perfil,setperfil]=useState("")
    const [codigo_estudante,setCodigo_estudante]=useState("")
    const [sala,setSala]=useState("")
    const [curso,setCurso]=useState("")
    const [semestre,setSemestre]=useState("")
    const [periodo,setPeriodo]=useState("")
    const [faculdade,setFacultadade]=useState("")
    const [cursos,setCursos]=useState([])
    const [idUsuario,setIdUsuario]=useState("")
    const [update,setUpdate]=useState("")
  

    
    const [link,setLink]=useState("")
    const [qrcodelinks, setQrcodeLinks]=useState("")

    
      

  
  



  function handleQrCode(e){
    setLink(e.target.value)
    handleQrCodeLik(e.target.value)
    setEmail(e.target.value)
   }
 
  function handleQrCodeLik(link_url){
    qrCodelink.toDataURL(link_url,{
      width:600,
      margin:4
    },function(err,url){
      setQrcodeLinks(url)
     
    })
  }









    return(
        <div className="space-y-3">
                                
                      <div className="w-full h-full">
                                  <QRCode
                                  
                                  value={link}
                                  />
                                  <input
                                    
                                    type="text" 
                                    placeholder="digite seu link"
                                    className=" mt-4 p-2 text-black rounded-md placeholder:text-sm " value={email}
                                    onChange={(e)=> handleQrCode(e)}
                                  />
          
                              <div className="mt-4 w-full ">
                              <a href={qrcodelinks}
                              download={`qr_code.png`}
                              className=" w-[250px] bg-slate-600 p-2 text-white"
                              >
                              baixar qrcode
                              </a>
                              </div>
                        
                      </div> 
                              
                    </div>
    )
}