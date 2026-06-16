import { useState } from "react";
import { savePost } from "../cmsStore";
import RichTextEditor from "../components/RichTextEditor";
import "../styles/post-form.css";

function Posts() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    savePost({
      id: Date.now(),
      title,
      slug: title.toLowerCase().replace(/\s+/g, "-"),
      content,
      date: new Date().toDateString(),
    });

    alert("Post published");
    setTitle("");
    setContent("");
  };

  return (
    <div className="post-container">
      <h1>Create New Post</h1>

      <form className="post-form" onSubmit={handleSubmit}>
        <label>Post Title</label>
        <input
          placeholder="Enter post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Post Content</label>
        <RichTextEditor value={content} onChange={setContent} />

        <button type="submit">Publish Post</button>
      </form>
    </div>
  );
}

export default Posts;
