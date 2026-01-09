export type Problem = {
  id: string;
  question: string;
  answer: number;
};

export const loaded_problems: Problem[] = [
  {
    id: "linear-1",
    question: "Solve for x: 2x + 3 = 11",
    answer: 4,
  },

  {
    id: "linear-2",
    question: "Solve for x: 3x = 10 - 2x",
    answer: 2, 
  },
];
