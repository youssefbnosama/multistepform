import './App.css';
import { createContext, useRef, useState } from 'react';
import Steps from './components/Steps';
import Info from './components/Info';
import Center1 from './components/Center1';
import Center2 from './components/Center2';
import Center3 from './components/Center3';
import Final from './components/Final';
import Thanks from './components/Thanks';
  const info =  [
    {h2:`Personal info`,p:`Please provide your name, email address, and phone number`,elemnt:<Center1 />},
    {h2: ` Select your plan`,p:`You have the option of monthly or yearly billing`,elemnt:<Center2 />},
    {h2:`Pick add-ons `,p:`Add-ons help enhance your gaming experience`,elemnt:<Center3 />},
    {h2:`Finishing up `,p:`Double-check everything looks OK before confirming`,elemnt:<Final />},
    {h2:``,p:``, elemnt:<Thanks />}
  ]
export const context = createContext()
function App() {
  const [text,setText] = useState(info[0])
  const [index,setIndex] = useState(0)
  const [add,setAdd] = useState([])

return (
  <div className='app'  >
    <context.Provider value={[text,setText,index,setIndex,info,add,setAdd]}>
    <div className='container'>
        <Steps />
        <Info  />
    </div>
    </context.Provider>
  </div>
)
}

export default App;
