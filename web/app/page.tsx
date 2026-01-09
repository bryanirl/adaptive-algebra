"use client";

import { useState } from "react";
import { problems } from "@/lib/problems";

export default function Home() {
  const problem = problems[0];

  const [value, setValue] = useState("");
  const [result, setResult] = useState<null | boolean>(null);

  const checkAnswer = () => {
    const numeric = Number(value);
    if (Number.isNaN(numeric)) return;

    setResult(numeric === problem.answer);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-xl font-semibold">Algebra Practice</h1>

      <div className="rounded border p-4 w-80">
        <p className="text-lg mb-2">{problem.question}</p>

        <input
          className="w-full border rounded p-2 mb-2"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Your answer"
        />

        <button
          onClick={checkAnswer}
          className="w-full rounded bg-black text-white py-2"
        >
          Check
        </button>

        {result !== null && (
          <p className="mt-2 text-center">
            {result ? "✅ Correct" : "❌ Incorrect"}
          </p>
        )}
      </div>
    </main>
  );
}
