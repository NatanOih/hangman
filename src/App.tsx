import { useCallback, useEffect, useState } from 'react'
import './App.css'
import { HangmanDrawing } from './HangmanDrawing'
import { HangmanWord } from './HangmanWord'
import { KeyBoard } from './KeyBoard'
import words from "./wordList.json"


function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })



  
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  
  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))
  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess.toUpperCase().split("").every(letter => guessedLetters.includes(letter))
 

  const addGuessedLetter = useCallback ((letter: string) => {
    if (guessedLetters.includes(String(letter).toUpperCase()) || isLoser || isWinner) return

    setGuessedLetters(currentLetters => [...currentLetters, String(letter).toUpperCase()])
  },[guessedLetters, isLoser, isWinner])

  useEffect(() => {

    const handler = (e: KeyboardEvent) => {
      const key = e.key


      if(!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key)
    }

    
    document.addEventListener('keypress', handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }

  } ,[guessedLetters]) 
  

  return (
   <div className= "spacer layer1" style={{
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    margin: "0 auto",
    alignItems: "center"
   }}>

    <div className='winLose'>
      {isWinner && "Winner!"}
      {isLoser && "Loser!"}
    </div>

    <HangmanDrawing numberOfGuesses = {guessedLetters.length}/>
    
    <HangmanWord 
      reveal = {isLoser}
      word= {wordToGuess} 
      guessedLetters = {guessedLetters}
    />
    <KeyBoard 
    disabled = {isWinner || isLoser}
    activeLetters = {guessedLetters.filter (letter => wordToGuess.includes(letter))}
    inactiveLetters = {incorrectLetters}
    addGuessedLetter = {addGuessedLetter}
    />


   </div>
  )
}

export default App
