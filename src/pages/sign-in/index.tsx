import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useDewanshsQuotes, useSignIn } from "../../utils/hooks";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

export default function SignInPage() {
  const { handleSignIn } = useSignIn();
  const { randomQuote } = useDewanshsQuotes();

  return (
    <div className="flex flex-col px-32 py-80 items-center">
      <h1 className="font-poppins text-3xl font-semibold">Sign In</h1>
      <p className="mt-3 font-poppins font-light">
        <FontAwesomeIcon icon={faQuoteLeft} className="w-8 h-8 mr-2" />
        {randomQuote}
      </p>
      <br />
      <br />
      <div
        onClick={handleSignIn}
        className="flex cursor-pointer font-poppins items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
      >
        <FontAwesomeIcon icon={faGoogle} className="w-4 h-4 mr-2" />
        Sign in with Google
      </div>
    </div>
  );
}
