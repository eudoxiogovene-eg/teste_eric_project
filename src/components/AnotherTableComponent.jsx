



export function  AnotherTableComponent({cabecalhos,values,usuarios,event}){
    
    return(
        <div>
            <table border="1"
            className="w-full"
            >
                <thead className="border">
                   <tr className="">
                    {cabecalhos.map((cabecalho)=>(
                        <th key={cabecalho} className="border-b border-r p-2 text-cor5 font-bold">{cabecalho}</th>
                    ))}
                   </tr>
                </thead>
                <tbody className="text-center">
                    {usuarios.map((usuario =>(
                         <tr onClick={()=>event(usuario._id)} key={usuario._id} className="hover:bg-cor5 hover:cursor-pointer hover:text-white">
                         <td  className="border p-1">{usuario.usuario.nome}</td>
                         <td className="border p-1">{usuario.usuario.sobrenome}</td>
                         <td className="border p-1">{usuario.usuario.email}</td>
                         <td className="border p-1">{usuario.usuario.perfil}</td>
                         <td className="border p-1">{usuario.usuario.instituicao}</td>
                         <td className="border p-1">{usuario.createdAt.split("T")[0]}</td>
                         <td className="border p-1">{usuario.createdAt.split("T")[1].split(".")[0]}</td>
                         
                     </tr>
                    )))}
                   
                </tbody>
            </table>
        </div>
    )
}