import { useParams } from "react-router-dom";
import { initialPosts } from "../../data/posts";
import "../../styles/blog.css";

const BlogDetails = () => {
  const { id } = useParams();
  const post = initialPosts.find((p) => p.id === Number(id));

  if (!post) return <p>Post not found</p>;

  return (
    <div className="blog-details-container">
      <article className="blog-article">

        <button
          className="back-button"
          onClick={() => navigate("/blog")}
        >
          ← Back to Blog
        </button>

        <h1>{post.title}</h1>

        <div className="blog-info">
          <span>👁 {post.views} views</span>
          <span>✍ Admin</span>
        </div>

        <div className="blog-content">
          <p>
            This is where your full blog content will appear. You can replace
            this with dynamic content from your CMS or database.
          </p>

          <p>
            The layout is optimized for reading with proper line-height, font
            size, and spacing.
          </p>
        </div>
      </article>
    </div>
  );
};

export default BlogDetails;