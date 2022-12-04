import React from 'react'
import './App.css'

type wordTypeprops = {
    word: string
    guessedLetters: string[]
    reveal? : boolean
}

export const HangmanWord = ({word, guessedLetters, reveal= false}: wordTypeprops ) => {
    const wordToGuess = String(word).toUpperCase()
    return (
        <div className='word-container'>
            {wordToGuess.split("").map((letter, index) => {
                return (
                    <span  key ={`b${index}`}className='wordLetter' > 
                        <span key={`a${letter}`} className = { reveal && !guessedLetters.includes(letter) ? 'reveal' : ''} style ={{ visibility: guessedLetters.includes(letter) || reveal
                            ? "visible"
                            : "hidden"
                        
                        }}> 
                            {letter} 
                        </span>   
                    </span>
                )
                })
            }  
        </div>
  )
}
