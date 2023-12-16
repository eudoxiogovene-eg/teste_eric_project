



export function  TableComponent({cabecalhos,values,usuarios,event}){
    return(
        <div className="h-full">
            <table border="1"
            className="w-full"
            >
                <thead className="border sticky top-0 z-10 bg-slate-400">
                   <tr className="">
                    {cabecalhos.map((cabecalho)=>(
                        <th key={cabecalho} className="border-b border-r p-2 text-cor5 font-bold">{cabecalho}</th>
                    ))}
                   </tr>
                </thead>
                <tbody className="text-center">
                    {usuarios.map((usuario =>(
                         <tr onClick={()=>event(usuario._id)} key={usuario._id} className="hover:bg-cor5 hover:cursor-pointer hover:text-white">
                         <td  className="border p-1">{usuario.nome}</td>
                         <td className="border p-1">{usuario.sobrenome}</td>
                         <td className="border p-1">{usuario.email}</td>
                         <td className="border p-1">{usuario.perfil}</td>
                         <td className="border p-1">{usuario.instituicao}</td>
                         
                     </tr>
                    )))}
                   
                </tbody>
            </table>
        </div>
    )
}