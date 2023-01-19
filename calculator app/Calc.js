import React, { useRef } from "react";
import './calc.css'
import { useState } from "react";
import { useEffect } from "react";
export default function Main(){
    const [input,setInput]=useState(0)
    const [string,setString]=useState("")
    function inputs(event){
        var put=input+event.currentTarget.innerHTML
        setInput(put)
        }
    function result(){
        var strings=input
        var final=strings.replaceAll("+","%2B").replaceAll("/","%2F")
        var feth=fetch("http://api.mathjs.org/v4/?expr="+final)
        feth.then((response1)=>{
            return response1.json()
        }).then((response2)=>{
            // $('.result').text(response2)
            setString(response2)
        }).catch((err)=>{
            alert(err)
        })
    }
    function clear(){
    setInput(0)
    setString(" ")
    }
    return(
        <>
        <div className="display">
        <input type="text" value={input} className="search" onChange={(event)=>{
            setInput(event.currentTarget.value)
            // setInput(button1.current.value)
            console.log(input)
        }}></input>
        <div className="result">{string}</div>
    </div>
    <div className="buttons">
        <button className="button" id="button1"  onClick={inputs}>1</button>
        <button className="button" id="button2" onClick={inputs}>2</button>
        <button className="button" id="button3" onClick={inputs}>3</button>
        <button className="button" id="button4" onClick={inputs}>4</button>
        <button className="button" id="button5" onClick={inputs}>5</button>
        <button className="button" id="button6" onClick={inputs}>6</button>
        <button className="button" id="button7" onClick={inputs}>7</button>
        <button className="button" id="button8" onClick={inputs}>8</button>
        <button className="button" id="button9" onClick={inputs}>9</button>
        <button className="button" id="button10" onClick={inputs}>0</button>
        <button className="button" id="button11" onClick={result} ></button>
        <button className="button" id="button12" onClick={inputs}>+</button>
        <button className="button" id="button13" onClick={inputs}>-</button>
        <button className="button" id="button14" onClick={inputs}>*</button>
        <button className="button" id="button15" onClick={inputs}>/</button>
        <button className="button" id="button16" onClick={clear}>C</button>
        <button className="button" id="button17" onClick={inputs}>.</button>
    </div>
        </>
    )
}