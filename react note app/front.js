import React, { useState } from 'react'
import './front.css'
export default function Notes(){
    const [note,setNote]=useState([""])
    const [display,setDisplay]=useState(["none"])
    const [elements, setElements] = useState([]);
    const [index, setIndex] = useState(1);
    function New(){
        setDisplay("block")
    }
    function Note(){
        // Use React.createElement to create a new element
    const newElement = React.createElement(
        'div',
        {style:{},className:"box",id:'box'+index},
        note
      );
      setDisplay("none")
  
      // Add the new element to the array of elements
      setElements([...elements, newElement]);
      setIndex(index+1)
    }
    return(
        <>
        <h1 className='app-title'>Note app</h1>
        <button className='add-button' onClick={New}>➕</button>
        <div className='dialogue' style={{"display":display}}>

        <input className='messages'  placeholder={"type your message here"} style={{"height":"100px","width":"100px"}} onChange={(Event)=>{
            setNote(Event.target.value)
        }}/> <br></br>
        <button onClick={Note}>Save</button>
        </div>
        {elements}
        </>
    )
}