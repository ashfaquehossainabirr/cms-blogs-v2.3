import { Link } from "react-router-dom";
import { getPosts } from "./cmsStore";
import "./styles/blog.css"

function BlogList() {
  const posts = getPosts();

  return (
    <section className="container">
      <h1>Blog</h1>

      {posts.length === 0 && <p>No posts yet.</p>}

      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <Link to={`/blog/${post.slug}`}>Read More →</Link>
        </article>
      ))}
    </section>
  );
}

export default BlogList;