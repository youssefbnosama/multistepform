import { useContext, useEffect, useRef } from "react"
import { context } from "../App"

export default function Center1(){
    let [text,setText,index,setIndex,info] =useContext(context)
    const name = useRef(null)
    const email = useRef(null)
    const phone = useRef(null)
    useEffect(()=>{
        setText(info[0])
        setIndex(0)
    },[])
    function click(){
        let emailValidate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        let numberValidate = /\d+/
        let v1 =false,v2=false,v3=false
        if(name.current.value.length != 0){
            v1=true
        } else{
            name.current.nextElementSibling.innerHTML = `This Field is required`
            name.current.style.border = `1px solid red`
        }
        if(email.current.value.match(emailValidate) != null){
            v2=true
        }else{
            email.current.nextElementSibling.innerHTML = `Write a valid email`
            email.current.style.border = `1px solid red`

        }
        if(phone.current.value.match(numberValidate) != null){
            v3=true
        } else{
            phone.current.nextElementSibling.innerHTML = `Write a valid number`
            phone.current.style.border = `1px solid red`

        }
          if(v1 == true && v2 ==true && v3 ==true){
        setText(info[index +1])
        setIndex(index +1) 
        localStorage.setItem(`p1`,JSON.stringify([name.current.value,email.current.value,phone.current.value]))
          }  

    }
    function input(e){
        e.style.border = `1px solid hsl(229, 24%, 87%)`
        e.nextElementSibling.innerHTML = ``
    }
    return(<>
        <div className="center1">
        <div className="name cont">
           <label>name</label>
    <input type="text" placeholder="e.g sthephen king" ref={name} onInput={(e)=>{input(e.currentTarget)}} />
    <div className="nameError"></div> 
        </div>
        <div className="gmail cont">
              <label>email address</label>
    <input type="text" placeholder="e.g stephenking@gmail.com" ref={email}  onInput={(e)=>{input(e.currentTarget)}}/>  
    <div className="emailError"></div> 

        </div>
        <div className="phone cont">
             <label>phone number</label>
    <input type="text" placeholder="2.g +1294338456" ref={phone}  onInput={(e)=>{input(e.currentTarget)}}/>   
    <div className="phoneError"></div> 
        </div>
        
    </div>
    <button onClick={click} className="next">Next Step</button>

    </>
    )
}