import { useContext, useEffect, useRef, useState } from "react"
import { context } from "../App"
import { click } from "@testing-library/user-event/dist/click"

export default function (){
    const [text,setText,index,setIndex,info,add,] = useContext(context)
    let time = sessionStorage.getItem(`time`)
    let type = JSON.parse(sessionStorage.getItem(`type`))
    const arc = useRef(null)
    const ti = useRef(null)
    const price = useRef(null)
    let arr1 = [{title:`Arcade`,price:9},{title:`Advanced`,price:12},{title:`Pro`,price:15}]
    let month = [`Monthly`,`Yearly`]
    const addiitons = [{title:`Online Service`,price:1},{title:`Larger Storage`,price:2},{title:`Customizable Profile`,price:2}]
    const [total,setTotal] = useState(arr1[+type].price)
    useEffect(()=>{
        let x = 0
        if(add.length > 0){
            add.forEach((e)=>{
                x += addiitons[e].price
            })
           
        }
        arc.current.innerHTML = arr1[+type].title
        price.current.innerHTML = arr1[+type].price
        if(time == `disabled`){
            ti.current.innerHTML = month[0]
            setTotal(total + x)
        }else{
            ti.current.innerHTML = month[1]
            price.current.innerHTML= +price.current.innerHTML * 10
            setTotal((total*10)+(10*x))
        }
    },[])
    function click(){
        setText(info[4])
    }
    return(<>
        <div className="final">
            <div className="top">
            <div className="left">
                <div><div className="f"><span className="arc" ref={arc}></span>  (<span className="ti" ref={ti}></span>)</div>
                <button className="change" onClick={()=>{setText(info[1]);setIndex(1)}}>change</button>
                </div>      
            <p className="oniChan">$<span ref={price}>9</span>/mo</p>
            </div>
                <hr />
            <div className="adds">
                    {add.length > 0&& add.map((e)=>{
                        return <div key={e}><p >{addiitons[e].title}</p><p>+$ {time == `disabled`?addiitons[e].price :+addiitons[e].price * 10}</p></div> 
                    })}
            </div>
            </div>
            <div className="total">
                <p>total(per {time == `disabled`?`month`:`year`})</p>
                <p>+{total}$/{time == `disabled`?`month`:`year`}</p>
            </div>
        </div>
        <button className="next" onClick={()=>{click()}}>Confirm</button>
    </>)
}