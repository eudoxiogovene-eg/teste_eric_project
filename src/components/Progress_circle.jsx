
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export function Progress_circle({name,number}){
    return(
        <div className="flex items-center justify-between rounded gap-8 bg-white p-3">
            <div className="flex flex-col gap-3">
                <span>{name}</span>
                <span>{number}</span>
            </div>
            <div style={{ width: 100, height: 100 }}>
                <CircularProgressbar
                 value={50} text={`90%`} 
                 />
            </div>
        </div>
    )
}