import { BlogArticlesList } from "../../components/blog/blog-articles-list";
import { BlogPageIntroDescription } from "../../components/blog/blog-page-introduction";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { useFirebaseData } from "../../utils/hooks";

export default function BlogPage() {
  useFirebaseData();
  return (
    <>
      <Header />
      <BlogPageIntroDescription />
      <BlogArticlesList />
      <Footer />
    </>
  );
}
