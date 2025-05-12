import { useNavigate } from "react-router-dom";
import NavBar from "./Navbar";
import { useState } from "react";

export default function CreateBlog() {
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [snippet, setSnippet] = useState();

  async function handleSubmit(e) {
    e.preventDefault();

    const newBlog = {
      title,
      snippet,
    };

    try {
      const response = await fetch("http://localhost:3000/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBlog),
      });

      if (response.ok) {
        navigate("/blogs");
      } else {
        console.error("Error creating blog!");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <NavBar />

      <div className="create-blog content">
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Blog title:</label>
          <input
            name="title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            autoComplete="off"
            id="title"
            placeholder="title"
            required
          />

          <label htmlFor="body">Blog Snippet:</label>
          <textarea
            name="snippet"
            onChange={(e) => setSnippet(e.target.value)}
            id="body"
            autoComplete="off"
            placeholder="Blog Snippet"
            required
          ></textarea>

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
