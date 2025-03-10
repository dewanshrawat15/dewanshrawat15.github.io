import { useLandingPageStore } from "../../utils/store";

export const BlogArticlesList = () => {
  const { blogPosts } = useLandingPageStore();

  return (
    <div className="flex px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <a href={`/blog/${post.slug}`}>
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              {post.imgURL && (
                <img
                  src={post.imgURL}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <h2 className="text-xl font-poppins font-semibold mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-500 font-poppins text-sm mb-2">
                  {new Date(post.date).toLocaleDateString()}
                </p>
                <p className="text-gray-700 font-light font-poppins mb-4">
                  {post.description.substring(0, 150)}...
                </p>
                <p className="text-gray-600 font-poppins text-sm italic">
                  {post.workshop === "true" ? "Workshop" : "Article"}
                </p>
                {/* <a href={`/blog/${index}`} className="text-blue-500 hover:underline">Read More</a>  */}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
