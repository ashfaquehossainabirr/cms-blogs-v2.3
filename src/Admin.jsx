import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "./auth";
import { savePost } from "./cmsStore";

function Admin() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id: Date.now(),
      title,
      slug: title.toLowerCase().replace(/\s+/g, "-"),
      content,
      date: new Date().toDateString(),
    };

    savePost(newPost);
    alert("Post Published!");

    setTitle("");
    setContent("");
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <section className="container">
      <h1>Admin Dashboard</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          placeholder="Post Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <button>Publish</button>
      </form>

      <button className="logout" onClick={handleLogout}>
        Logout
      </button>
    </section>
  );
}

export default Admin;