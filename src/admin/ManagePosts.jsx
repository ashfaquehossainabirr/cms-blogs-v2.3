import { useState } from "react";
import { getPosts, deletePost, updatePost } from "../cmsStore";
import "../styles/manage-posts.css"

function ManagePosts() {
  const [posts, setPosts] = useState(getPosts());
  const [editingPost, setEditingPost] = useState(null);

  const handleDelete = (id) => {
    if (window.confirm("Delete this post?")) {
      deletePost(id);
      setPosts(getPosts());
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updatePost(editingPost);
    setEditingPost(null);
    setPosts(getPosts());
  };

  return (
    
    <section className="manage-posts">
      <h1>Manage Posts</h1>

      {posts.length === 0 && <p className="empty">No posts found.</p>}

      <div className="posts-list">
        {posts.map((post) => (
          <div key={post.id} className="post-row">
            <div className="post-info">
              <strong>{post.title}</strong>
              <span className="post-slug">{post.slug}</span>
            </div>

            <div className="actions">
              <button className="edit" onClick={() => setEditingPost(post)}>
                Edit
              </button>
              <button className="delete" onClick={() => handleDelete(post.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {editingPost && (
        <div className="modal-overlay">
          <form className="edit-form" onSubmit={handleUpdate}>
            <h2>Edit Post</h2>

            <input
              value={editingPost.title}
              onChange={(e) =>
                setEditingPost({
                  ...editingPost,
                  title: e.target.value,
                  slug: e.target.value.toLowerCase().replace(/\s+/g, "-"),
                })
              }
              required
            />

            <textarea
              value={editingPost.content}
              onChange={(e) =>
                setEditingPost({ ...editingPost, content: e.target.value })
              }
              required
            />

            <div className="form-actions">
              <button className="save">Update</button>
              <button
                type="button"
                className="cancel"
                onClick={() => setEditingPost(null)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
}

export default ManagePosts;