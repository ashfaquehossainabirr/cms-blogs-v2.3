// cmsStore.js

export const getPosts = () => {
  return JSON.parse(localStorage.getItem("posts")) || [];
};

export const savePost = (post) => {
  const posts = getPosts();
  localStorage.setItem("posts", JSON.stringify([...posts, post]));
};

export const deletePost = (id) => {
  const posts = getPosts().filter((post) => post.id !== id);
  localStorage.setItem("posts", JSON.stringify(posts));
};

export const updatePost = (updatedPost) => {
  const posts = getPosts().map((post) =>
    post.id === updatedPost.id ? updatedPost : post
  );
  localStorage.setItem("posts", JSON.stringify(posts));
};