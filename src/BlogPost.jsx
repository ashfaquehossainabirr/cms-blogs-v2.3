import { useNavigate, useParams } from "react-router-dom";
import { getPosts } from "./cmsStore";
import "./styles/blog.css"

function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = getPosts().find((p) => p.slug === slug);

  if (!post) return <h2>404 – Post Not Found</h2>;

  return (
    <section className="container">
      <button
          className="back-button"
          onClick={() => navigate("/")}
        >
          ← Back to Blog
      </button>

      <h1>{post.title}</h1>
      <small>{post.date}</small>
      <p>{post.content}</p>
    </section>
  );
}

export default BlogPost;