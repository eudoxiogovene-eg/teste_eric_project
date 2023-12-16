

import {LucideAccessibility, Users} from 'lucide-react'



export function Info_container({Icon,name,number}){
    return(
        <div className="w-[260px] bg-white flex  gap-2 p-3 rounded">
            <div className='w-14 bg-cor11 p-2 rounded flex justify-center items-center'>
            <Icon />
            </div>
            
            <div className='flex flex-col gap-2'>
                <h1 className='text-sm'>{name}</h1>
                <span>{number || 0}</span>
            </div>
        </div>
    )
}