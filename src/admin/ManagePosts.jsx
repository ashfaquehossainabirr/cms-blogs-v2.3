import { useState } from "react";
import { getPosts, deletePost, updatePost } from "../cmsStore";

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
    <>
      <h1>Manage Posts</h1>

      {posts.length === 0 && <p>No posts found.</p>}

      {posts.map((post) => (
        <div key={post.id} className="post-row">
          <strong>{post.title}</strong>

          <div className="actions">
            <button onClick={() => setEditingPost(post)}>Edit</button>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </div>
        </div>
      ))}

      {editingPost && (
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

          <button>Update</button>
          <button type="button" onClick={() => setEditingPost(null)}>
            Cancel
          </button>
        </form>
      )}
    </>
  );
}

export default ManagePosts;