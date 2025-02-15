import type React from "react"
import { Button } from "./ui/button"

type Player = "X" | "O"
type GameState = Player | null

interface BoardProps {
  board: GameState[]
  onClick: (index: number) => void
}

const Board: React.FC<BoardProps> = ({ board, onClick }) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {board.map((square, index) => (
        <Button
          key={index}
          onClick={() => onClick(index)}
          className="w-20 h-20 text-4xl font-bold"
          variant={square ? "default" : "outline"}
        >
          {square}
        </Button>
      ))}
    </div>
  )
}

export default Board


