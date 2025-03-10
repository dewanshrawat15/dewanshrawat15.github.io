import { useNavigate, useParams } from "react-router";
import { useFirebaseData } from "../../utils/hooks";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { useEffect } from "react";
import { useLandingPageStore } from "../../utils/store";

const BlogDetails = ({ id }: { id: string }) => {
  const { blogPosts } = useLandingPageStore();
  const blogPost = blogPosts.find((post) => post.slug === id);

  if (blogPost === undefined) {
    return <></>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article>
        {/* Image (Conditional) */}
        {blogPost.imgURL && (
          <img
            src={blogPost.imgURL}
            alt={blogPost.title}
            className="w-full h-auto rounded-lg mb-8"
          />
        )}

        {/* Title */}
        <h1 className="text-3xl font-poppins font-bold text-gray-900 mb-4">
          {blogPost.title}
        </h1>

        {/* Metadata (Date and Workshop) */}
        <div className="flex font-poppins items-center text-gray-600 mb-6">
          <span className="mr-4">{blogPost.date}</span>
          {blogPost.workshop === "workshop" && ( // Only display if workshop exists
            <span>Workshop</span>
          )}
        </div>

        {/* Description (using dangerouslySetInnerHTML for potential rich text) */}
        <div
          className="prose prose-lg font-poppins text-gray-700" // prose class from Tailwind typography plugin
          dangerouslySetInnerHTML={{ __html: blogPost.description }}
        />
      </article>
    </div>
  );
};

export default function BlogDetailPage() {
  const { id } = useParams();
  const navigateTo = useNavigate();
  useFirebaseData();

  useEffect(() => {
    if (id === undefined) {
      navigateTo("/");
    }
  }, [id]);

  if (id) {
    return (
      <>
        <Header />
        <BlogDetails id={id} />
        <Footer />
      </>
    );
  } else {
    return <></>;
  }
}
