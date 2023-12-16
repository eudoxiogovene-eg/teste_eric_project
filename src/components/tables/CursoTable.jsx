export function  CursoTable({cabecalhos,values,cursos,event}){
    return(
        <div className="">
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
                    {cursos.map((curso =>(
                         <tr onClick={()=>event(curso._id)} key={curso._id} className="hover:bg-cor5 hover:cursor-pointer hover:text-white">
                         <td  className="border p-1">{curso.nomeCurso}</td>
                         <td className="border p-1">{curso.createdAt.split("T")[0]}</td>
                         <td className="border p-1">{curso.createdAt.split("T")[1].split(".")[0]}</td>       
                     </tr>
                    )))}
                   
                </tbody>
            </table>
        </div>
    )
}