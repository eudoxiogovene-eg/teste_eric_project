
export function ButtonComponent({buttonName,event}){
    return(
        <div>
            <button
             className="
                        w-full text-white text-xl bg-cor4 p-1
                       hover:bg-cor5 cursor-pointer
                        "
                        onClick={event}
              >{buttonName}</button>
        </div>
         
    )
}