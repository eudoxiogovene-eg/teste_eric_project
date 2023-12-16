





export function SelectCompont({values,value,name,setValue}){
    return(
    
        <select
         className="bg-slate-100 p-2 w-full rounded-sm  focus:border
         border-orange-500 placeholder:text-sm placeholder:text-gray-400
         "
         onChange={(e)=>setValue(e.target.value)}
         value={value}
         >
            <option className="" value=''>selecione</option>
         
                 {values.map((val,index)=>(
                  
                  <option key={index} value={val}>{val}</option>
                ))} 
        </select>
       
    )
}