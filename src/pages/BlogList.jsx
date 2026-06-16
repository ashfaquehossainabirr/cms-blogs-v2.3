import { Link } from "react-router-dom";
import { initialPosts } from "../../data/posts";
import "../../styles/blog.css";

const BlogList = () => {
  return (
    <div className="blog-container">
      <h1 className="blog-title">Latest Articles</h1>

      <div className="blog-grid">
        {initialPosts.map((post) => (
          <div className="blog-card" key={post.id}>
            <div className="blog-card-content">
              <h2>{post.title}</h2>
              <p className="blog-excerpt">
                This is a short preview of the blog content...
              </p>

              <div className="blog-meta">
                <span>{post.views} views</span>
                <Link to={`/blogs/${post.id}`} className="read-more">
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;