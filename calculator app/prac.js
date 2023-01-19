import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
export default function M () {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
  
    useEffect(() => {
      if (ref1.current) {
         // ref1.current is now available and you can use it
      }
    }, [ref1]);
  
    const handleClick = (event) => {
      const refValue = event.currentTarget.dataset.ref;
      switch(refValue) {
        case '1':
          console.log(ref1.current.value);
          break;
        case '2':
          console.log(ref2.current.value);
          break;
        case '3':
          console.log(ref3.current.value);
          break;
        case '4':
          console.log(ref4.current.value);
          break;
        case '5':
          console.log(ref5.current.value);
          break;
        default:
          break;
      }
    }
    return (
      <div>
        <button data-ref="1" onClick={handleClick}>Button 1</button>
        <button data-ref="2" onClick={handleClick}>Button 2</button>
        <button data-ref="3" onClick={handleClick}>Button 3</button>
        <button data-ref="4" onClick={handleClick}>Button 4</button>
        <button data-ref="5" onClick={handleClick}>Button 5</button>
      </div>
    );
  }
  