import { useState, useEffect } from "react";
import NavBar from "./Navbar";
import Blogs from "./Blogs";
import Loader from "./Loader";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    async function getBlogs() {
      try {
        setIsLoading(true);
        const response = await fetch(`${API_URL}/blogs`);
        const data = await response.json();
        setBlogs(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
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
          {isLoading ? <Loader /> : <Blogs blogs={blogs} />}
        </div>
      </div>
    </div>
  );
}
