"use client"

import React, { useState ,useEffect} from 'react';
import { QrReader } from 'react-qr-reader';
import api from '@/services/api';
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



export default function Qrcodereader(props){
  const [data, setData] = useState("");

 

 
  return (
    <>
      <div className='w-full h-screen flex p-4 bg-slate-500 relative'>
      <ToastContainer />
            <div className='flex  gap-4'>
                <div className='w-[500px] h-[500px] absolute top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] ' >
               <div>
               <QrReader
                 onResult={(result, error) => {
                 
                    if (!!result) {
                      console.log(result.text)
                    setData(result?.text);
                    setData(result.text)
                    }
                    

                    if (!!error) {
                    console.info(error);
                    }
                }}
                style={{ width: '100%' }}
                />
               </div>
                <p>{data} </p>
                </div>
                
            </div>
           
        
      </div>
    </>
  );
};4