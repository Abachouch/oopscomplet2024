'use client'

import { useEffect } from "react"

export default function ChangeBg(){
    useEffect( ()=> {
        document.body.style.backgroundColor = '#FAE659'; // Change to your desired background color
          return () => {
            document.body.style.backgroundColor = '#fcf2ab';
          };
    } ,[])
    return(<></>)
}