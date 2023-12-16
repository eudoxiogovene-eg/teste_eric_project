export function InputComponent({type,placeholder,value,setValue}){
    return(
        <div >
            <input 
            className="
            bg-slate-100 p-2 w-full rounded-sm  focus:border
             border-orange-500 placeholder:text-sm placeholder:text-gray-400
             "
            type={type} placeholder={placeholder}
            value={value}
            onChange={(e)=>setValue(e.target.value)}
            />
        </div>
    )
}