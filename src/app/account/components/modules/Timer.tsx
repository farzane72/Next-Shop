"use client"
import { useEffect, useState } from "react";
import { GrFormRefresh } from "react-icons/gr";
interface TimerProps {
    time:number
}
 
const Timer: React.FunctionComponent<TimerProps> = ({time}) => {
    const [timer,setTimer]=useState({
        time,
        minuts:Math.floor((time-1)/60),
        seconds:time-Math.floor((time-1)/60)*60 -1
        
    })
    useEffect(()=>{
        setTimeout(()=>{
            if(timer.time===0){
                return
            }
            setTimer({
                time:timer.time-1,
                minuts:Math.floor((timer.time-1)/60),
                seconds:timer.time-Math.floor((timer.time-1)/60)*60 -1
            })

        },1000)

    },[timer.time])
    return (
        <div>
            
            {(timer.time !==0) ?`${timer.minuts <10 ?`0${timer.minuts}`:timer.minuts}:${timer.seconds <10 ?`0${timer.seconds}`:timer.seconds}`
            :
            <div className="text-blue-500 flex gap-1 items-center">
                <span>دریافت مجدد کد</span><GrFormRefresh  className="text-xl"/></div>
            }
          
        </div>
      );
}
 
export default Timer;