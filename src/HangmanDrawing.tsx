import React from 'react'

const HEAD = (
    <div style={{
        fontSize:"23px",
        width:"50px",
        height:"50px",
        borderRadius: "100%",
        border: "10px solid black",
        position: "absolute",
        top:"50px",
        right:"-30px",
    }}> X   X </div>
)
const BODY = (
    
    <div 
    key = "BODY"
    style={{
        width:"10px",
        height:"100px",
        background: "black",
        position: "absolute",
        top:"110px",
        right:"0px",
    }} /> 
)
const ARML = (
    <div 
    key = "ARML"
    style={{
        width:"70px",
        height:"10px",
        background: "black",
        position: "absolute",
        top:"130px",
        right:"0px",
        rotate: "-35deg"
    }}/>
)
const ARMR = (
    <div 
    key = "ARMR"
    style={{
        width:"70px",
        height:"10px",
        background: "black",
        position: "absolute",
        top:"130px",
        right:"-55px",
        rotate: "-145deg"
    }}/>
)

const LEGL = (
    <div 
    key = "LEGL"
    style={{
        width:"70px",
        height:"10px",
        background: "black",
        position: "absolute",
        top:"230px",
        right:"-22px",
        rotate: "-75deg"
    }}/>
)

const LEGR = (
    <div 
    key = "LEGR"
    style={{
        width:"70px",
        height:"10px",
        background: "black",
        position: "absolute",
        top:"220px",
        right:"-56px",
        rotate: "-145deg"
    }}/>
)

type HangmanProps = {
    numberOfGuesses : number
}

const BODY_PARTS = ['', BODY, ARML, ARMR, LEGL, LEGR]
export const HangmanDrawing = ({numberOfGuesses} : HangmanProps) => {
  return (
    <div className = "drawing" style={{ position: "relative", marginTop: "2rem"}}>
            {numberOfGuesses > 0  ? HEAD : null}
        <div className='stickman'>
            {BODY_PARTS.slice(1,numberOfGuesses )}
        </div>
       
        <div style={{ height: "50px", width:"10px", background: "black", position: "absolute", top: "0", right: "0"}}/>
        <div style={{ height: "10px", width: "150px", background: "black" , marginLeft: "120px"}}/>
        <div style={{ height: "400px", width:"10px", background: "black", marginLeft: "120px"}}/>
        <div style={{ height: "10px", width: "250px", background: "black"}}/>
        
        
    </div>
  )
}
