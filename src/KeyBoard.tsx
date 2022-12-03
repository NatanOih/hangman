import React, { useEffect, useState } from 'react'
import letters from "./letters.json"
import "./App.css"

type keyBoardProps = {
  activeLetters: string[]
  inactiveLetters: string[]
  addGuessedLetter : (letter : string) => void
  disabled?: boolean
}

export const KeyBoard = ({activeLetters, inactiveLetters, addGuessedLetter, disabled = false} : keyBoardProps) => {

  return (
    <div className='keyBoard-container'>
      {[...letters].map((array, index) => {
        return <div key ={index + "asc"} className=  { index === 2 ? "keyBoard3" : "keyboard"} > 
          {[...array].map( (letter, index) => {
          const isActive = activeLetters.includes(letter)
          const inActive = inactiveLetters.includes(letter)
          return <button
            onClick={() => addGuessedLetter(letter)} 
            className= {`key ${isActive ? " active" : ""} ${inActive ? " inacive" : ""}`} 
            key ={letter}
            disabled = { inActive || isActive || disabled}
            >{letter}

          </button>
        })}
         </div>
      })}
     
    </div>

  )
}



