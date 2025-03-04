import { useMemo } from "react";

const getRandomQuote = (count: number): string[] => {
  const quotes: string[] = [
    "Kyaa kijeyega itni dhan rashi ka?",
    "Tera bhi theek hai",
    "Seh lenge thoda?",
    "Control Dewansh, control!",
    "Itne pyaar se mt dekho meko, mei apna train of thought bhool jaata hoon!",
    "Ye bik gayi hai gormint!",
  ];

  if (count > quotes.length) {
    throw new Error("Requested count exceeds the number of available quotes.");
  }

  // Shuffle the array using the Fisher-Yates shuffle algorithm
  const shuffledQuotes = [...quotes]; // Create a copy to avoid modifying the original
  for (let i = shuffledQuotes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledQuotes[i], shuffledQuotes[j]] = [
      shuffledQuotes[j],
      shuffledQuotes[i],
    ];
  }

  return shuffledQuotes.slice(0, count);
};

export const RouterLoader = () => {
  const quote = getRandomQuote(1);
  const finalQuote = useMemo(() => quote[0], [quote]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-white px-32 py-48">
      <h1 className="font-poppins font-bold text-2xl">
        Structuring website content
      </h1>
      <p className="mt-4 w-2/3 font-poppins font-normal text-xl text-center">
        Dewansh Rawat once said...
      </p>
      <p className="mt-1 w-2/3 font-poppins font-light text-base text-center">
        {finalQuote}
      </p>
    </div>
  );
};
