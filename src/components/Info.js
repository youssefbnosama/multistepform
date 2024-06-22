import { useContext, useEffect, useState } from "react"
import Center1 from "./Center1"
import Center2 from "./Center2"
import { context } from "../App"
export default function Info(){
    const [text,setText,index,setIndex,info] = useContext(context)
    return(
        <div className="info">   
        <div className="top">            
            <h2>{ text.h2}</h2>
            <p>{ text.p}</p>
            </div>    

            {text.elemnt}
        </div>
    )
}