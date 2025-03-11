import { useDewanshsQuotes } from "../../utils/hooks";

export const RouterLoader = () => {
  const { randomQuote } = useDewanshsQuotes();

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-white px-4 sm:px-32 py-48">
      <h1 className="font-poppins font-bold text-xl md:text-2xl text-center">
        Structuring website content
      </h1>
      <p className="mt-4 w-2/3 font-poppins font-normal text-lg md:text-xl text-center">
        Dewansh Rawat once said...
      </p>
      {randomQuote ? (
        <p className="mt-1 w-2/3 font-poppins font-light text-sm md:text-base text-center">
          {randomQuote}
        </p>
      ) : (
        <></>
      )}
    </div>
  );
};
