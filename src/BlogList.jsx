import { Link } from "react-router-dom";
import { getPosts } from "./cmsStore";
import "./styles/blog.css"

function BlogList() {
  const posts = getPosts();

  return (
    <section className="blog-container">
      <h1 className="blog-title">Blog</h1>

      {posts.length === 0 && <p className="empty">No posts yet.</p>}

      <div className="blog-grid">
        {posts.map((post) => (
          <article key={post.id} className="blog-card">
            <h2>{post.title}</h2>
            <Link to={`/blog/${post.slug}`} className="read-more">
              Read More →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export default BlogList;