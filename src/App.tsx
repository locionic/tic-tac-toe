"use client"

import { useState } from "react"
import Board from "./components/Board"
import ScoreHistory from "./components/ScoreHistory"
import { Button } from "./components/ui/button"

type Player = "X" | "O"
type GameState = Player | null

function App() {
  const [board, setBoard] = useState<GameState[]>(Array(9).fill(null))
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X")
  const [winner, setWinner] = useState<GameState>(null)
  const [isDraw, setIsDraw] = useState(false)
  const [scores, setScores] = useState({ X: 0, O: 0 })

  const checkWinner = (squares: GameState[]): GameState => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }

    return null
  }

  const handleClick = (index: number) => {
    if (board[index] || winner || isDraw) return

    const newBoard = [...board]
    newBoard[index] = currentPlayer
    setBoard(newBoard)

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
      setScores((prev) => ({ ...prev, [newWinner]: prev[newWinner] + 1 }))
    } else if (!newBoard.includes(null)) {
      setIsDraw(true)
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X")
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setCurrentPlayer("X")
    setWinner(null)
    setIsDraw(false)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Tic-Tac-Toe</h1>
      <Board board={board} onClick={handleClick} />
      <div className="mt-4">
        {winner ? (
          <p className="text-2xl font-semibold">Winner: {winner}</p>
        ) : isDraw ? (
          <p className="text-2xl font-semibold">It's a draw!</p>
        ) : (
          <p className="text-xl">Current player: {currentPlayer}</p>
        )}
      </div>
      <Button onClick={resetGame} className="mt-4">
        Restart Game
      </Button>
      <ScoreHistory scores={scores} />
    </div>
  )
}

export default App


