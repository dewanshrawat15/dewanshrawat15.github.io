export default function RouteNotFoundPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-poppins font-bold text-gray-800 mb-4">
          404
        </h1>
        <p className="text-2xl font-poppins text-gray-600 mb-2">
          Oops! Page Not Found
        </p>
        <p className="text-gray-600 font-poppins mb-6">
          The link might be corrupted or the page might have been removed.
        </p>
        <br />
        <a
          href="/"
          className="bg-black hover:bg-gray-900 font-poppins text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
