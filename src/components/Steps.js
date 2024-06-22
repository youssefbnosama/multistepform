import { useContext, useEffect, useRef } from "react"
import { context } from "../App"

export default function Steps(){
    const steps = useRef(null)
    const [,,index,] = useContext(context)
    useEffect(()=>{
         if(steps.current.children[0] && index >= 0 ){
             let a = steps.current.children[+index].children[0]
             let arr = [...steps.current.children]
             arr.forEach((e)=>{
                e.children[0].id = ``
             })
            a.id = `active`
         }
    },[index])
    return(
        <div className="steps" ref={steps} onClick={()=>{console.log()}}>
                <ul className="step">
                    <div className="number">1</div>
                    <ul>
                        <p>step 1</p>
                        <li>your info</li>
                    </ul>
                </ul>
                <ul className="step">
                    <div className="number">2</div>
                    <ul>
                        <p>step 2</p>
                        <li>select plans</li>
                    </ul>
                </ul>
                <ul className="step">
                    <div className="number">3</div>
                    <ul>
                        <p>step 3</p>
                        <li>add-ons</li>
                    </ul>
                </ul>
                <ul className="step">
                    <div className="number">4</div>
                    <ul>
                        <p>step 4</p>
                        <li>summary</li>
                    </ul>
                </ul>
        </div>
    )
}