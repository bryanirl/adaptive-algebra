"use client";

import { useState } from "react";
import { loaded_problems } from "@/lib/problem_bank";

export default function Home() {

  //Fisher-Yates shuffle of loaded_problems
  function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  //Setting up states for problem index, number of attempts, and number of correct attempts
  const [currentIndex, setCurrentIndex] = useState(0)
  const [attempts, setAttempts] = useState(0)
  const [correct, setCorrect] = useState(0)

  //problem array
  const [problems, setProblems] = useState(() => shuffleArray(loaded_problems));
  const currentProblem = problems[currentIndex]

  //Setting up states for value and result
  const [value, setValue] = useState("");
  const [result, setResult] = useState<null | boolean>(null);

  //updates Result state when check button is clicked
  const checkAnswer = () => {
    const numeric = Number(value);
    if (Number.isNaN(numeric)) return;
    if (result !== null) return;

    setAttempts((prev) => prev + 1);
    if (numeric === currentProblem.answer) {
      setResult(true)
      setCorrect((prev) => prev + 1)
    }
    else {
      setResult(false)
    }
    
  };

  //generates new problem from initially shuffled set. sets text field and result to empty string and null
  function nextProblem() {
    setCurrentIndex((prev) => {
      if (prev + 1 >= problems.length) {
        // reshuffle and restart if all problems are solved
        setProblems(shuffleArray(loaded_problems))
        return 0
      }
      return prev + 1
    })

    setValue("")
    setResult(null)
  }

  //Problem loading error catching
  if(!currentProblem){
    return <p>Loading problems...</p>
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-xl font-semibold">Algebra Practice</h1>

      <div className="rounded border p-4 w-80">
        <p className="text-lg mb-2">{currentProblem.question}</p>

        <input
          disabled={result !== null}
          className="w-full border rounded p-2 mb-2"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Your answer"
        />

        {result === null && (<button
          onClick={checkAnswer}
          className="w-full rounded bg-black text-white py-2"
        >
          Check
        </button>
      )}

        {result !== null && (
          <div>
            <p className="mt-2 text-center">
              {result ? "✅ Correct" : "❌ Incorrect"}
            </p>
            <button
              onClick={nextProblem}
              className="w-full rounded bg-black text-white py-2"
              >
                Next Problem
            </button>
          </div>
         )}
      </div>

      <h3 className="text-xl font-semibold">Attempts: {attempts} </h3>
      <h3 className="text-xl font-semibold">Correct: {correct}/{attempts} </h3>
      
    </main>
  );
}
