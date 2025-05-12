import { useState, useEffect } from "react";
import NavBar from "./Navbar";
import Blogs from "./Blogs";
import Loader from "./Loader";
import Error from "./Error";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL;
  if (!API_URL) {
    throw new Error("VITE_API_URL is not defined.");
  }

  useEffect(() => {
    async function getBlogs() {
      try {
        setIsLoading(true);
        const response = await fetch(`${API_URL}/blogs`);
        const data = await response.json();
        setBlogs(data);
      } catch (err) {
        console.log(err);
        setError("Failed to load blogs!");
      } finally {
        setIsLoading(false);
      }
    }
    getBlogs();
  }, [API_URL]);

  return (
    <div>
      <NavBar />

      <div className="blogs content">
        <h2>All Blogs</h2>

        <div className="card-container">
          {isLoading ? <Loader size={1.4} /> : <Blogs blogs={blogs} />}
          {error && <Error error={error} />}
        </div>
      </div>
    </div>
  );
}
