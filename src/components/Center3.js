import { useState,useContext, useRef, useEffect } from "react"
import {context}  from '../App'
export default function Center3(){
    let [text,setText,index,setIndex,info,add,setAdd] = useContext(context)
    const center = useRef(null)
    const [arr,setArr] = useState([])
    function check(e,parent){
        if(e.checked){
            e.checked = !e.checked
            parent.style.backgroundColor = `white`
            parent.style.border = `1px solid hsl(229, 24%, 87%)`
            parent.classList.remove(`added`)
        } else{
            e.checked = !e.checked
            parent.style.backgroundColor = `hsl(217, 100%, 97%)`
            parent.style.borderColor =`hsl(243, 100%, 62%)`
            parent.classList.add(`added`)
        }
    }
    function click(){
        const added = []
       const children =  [...center.current.children]
       children.forEach((e)=>{
        if(e.classList.contains(`added`)){
           added.push(e.dataset.num)
        }
       })
       setAdd(added)
        setText(info[index +1])
        setIndex(index +1)
    }
    return(<>
        <div className="center3" ref={center}>
            <div data-num="0"  className="card" onClick={(e)=>{check(e.currentTarget.children[0].children[0],e.currentTarget)}}>
                <div className="left">
                          <input type="checkbox"  />
            <div className="text">
                    <h3>Online Service</h3>
                    <p>Access to multiplayer games</p>
            </div>       
                </div>

            <p className="price"> + ${sessionStorage.getItem(`time`) == `disabled`?`1/mo` :`10/yr`}</p>
            </div>
            <div data-num="1"  className="card" onClick={(e)=>{check(e.currentTarget.children[0].children[0],e.currentTarget)}}>
                <div className="left">
            <input type="checkbox" />
            <div className="text">
                    <h3>Larger Storage</h3>
                    <p>Extra 1TB of Cloud save</p>
            </div>                    
                </div>

            <p className="price"> + ${sessionStorage.getItem(`time`) == `disabled`?`2/mo` :`20/yr`}</p>
            </div>
            <div data-num="2"  className="card" onClick={(e)=>{check(e.currentTarget.children[0].children[0],e.currentTarget)}}>
                <div className="left">

             <input type="checkbox" />
            <div className="text">
                    <h3>Customizable Profile</h3>
                    <p>Custom Theme on your profile</p>
            </div>               </div>

            <p className="price"> + ${sessionStorage.getItem(`time`) == `disabled`?`2/mo` :`20/yr`}</p>
            </div>
        </div>
        <button onClick={click} className="next">Next Step</button>
  </>  )
}