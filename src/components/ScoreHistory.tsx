import type React from "react"

interface ScoreHistoryProps {
  scores: {
    X: number
    O: number
  }
}

const ScoreHistory: React.FC<ScoreHistoryProps> = ({ scores }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-2">Score History</h2>
      <div className="flex justify-center space-x-8">
        <p className="text-xl">Player X: {scores.X}</p>
        <p className="text-xl">Player O: {scores.O}</p>
      </div>
    </div>
  )
}

export default ScoreHistory


