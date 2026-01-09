import { problems } from "@/lib/problems";

export default function Home() {
  const problem = problems[0];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-xl font-semibold">Algebra Practice</h1>

      <div className="rounded border p-4">
        <p className="text-lg">{problem.question}</p>
      </div>
    </main>
  );
}
