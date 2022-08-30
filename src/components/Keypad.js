// Code Keypad Component Here
import React from "react"


function Keypad (){
    function display() {
        console.log("Entering password...")
    }
    
    return (
        <input type="password" onChange={display}>
        </input> 
    )
}

export default Keypad;