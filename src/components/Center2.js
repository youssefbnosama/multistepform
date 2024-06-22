import icon1 from '../images/icon-arcade.svg'
import icon2 from '../images/icon-advanced.svg'
import icon3 from '../images/icon-pro.svg'
import { useContext, useRef, useState } from 'react'
import { context } from '../App'
export default function Center2 (){
    const [abled,setAbled] = useState(false)
    const togg = useRef(null)
    const [number,setNumber] = useState(0)
    const [text,setText,index,setIndex,info] = useContext(context)
let element1 =  <li data-number='0' className='li' id='activeLi' onClick={(e)=>{choose(e.currentTarget)}}>
                <img src={icon1}/>
                <div className="price">
                    <h4>Arcade</h4>
                    <p>$9/mo</p>
                    <p className='hidden'>2Months free</p>
                </div>
                </li>
let element2 =  <li data-number='1' className='li'onClick={(e)=>{choose(e.currentTarget)}}>
                <img src={icon2}/>
                <div className="price">
                    <h4>Advanced</h4>
                    <p>$12/mo</p>
                    <p className='hidden'>2Months free</p>
                </div>
            </li>
let element3 =  <li data-number='2' className='li'onClick={(e)=>{choose(e.currentTarget)}}>
                <img src={icon3}/>
                <div className="price">
                    <h4>Pro</h4>
                    <p>$15/mo</p>
                    <p className='hidden'>2Months free</p>
                </div>
            </li>
    function toggle(e){
        let hidden = [...document.getElementsByClassName(`hidden`)]
       if(abled){
        e.classList.remove(`abled`)
        e.classList.add(`disabled`)
        hidden.forEach((e)=>{
            e.style.display = `none`
        })
        setAbled(!abled)
       }else{
        e.classList.remove(`disabled`)
        e.classList.add(`abled`)
        hidden.forEach((e)=>{
            e.style.display = `block`
        })
        setAbled(!abled)
       }
    }
   function choose(e){
    setNumber(e.dataset.number)
   let arr = [...e.parentElement.children]
   arr.forEach((e)=>{
    e.id = ``
   })
   e.id = `activeLi`
   }
   const  click =()=>{
    sessionStorage.setItem(`time`,togg.current.classList[0])
    sessionStorage.setItem(`type`,JSON.stringify(number))
    setText(info[index +1])
    setIndex(index +1) 
   }
    return(<>
        <div className='p2'>
    <div className="top">
        <ul >
           {element1}
           {element2}
           {element3}
                
           
        </ul>

    </div>
    <div className="bottom">
        <p>Monthly</p>    
        <div className='toggle' onClick={(e)=>{toggle(e.currentTarget.children[0])}}>
            <div className='disabled ball' ref={togg}></div>
        </div>
        <p>Yearly</p>
    </div>
    </div>
    <button  className="next" onClick={click} >Next Step</button>
    </>)
}