import { useNavigate, useParams } from "react-router-dom";
import { getPosts } from "./cmsStore";
import "./styles/blog.css"

function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = getPosts().find((p) => p.slug === slug);

  if (!post) return <h2>404 – Post Not Found</h2>;

  return (
    <section className="blog-post-page">
      <button className="back-button" onClick={() => navigate("/")}>
        ← Back to Blog
      </button>

      <article className="blog-post">
        <h1>{post.title}</h1>
        <small className="post-date">{post.date}</small>
        <p className="post-content">{post.content}</p>
      </article>
    </section>
  );
}

export default BlogPost;