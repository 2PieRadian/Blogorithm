import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Loader from "./Loader";

export default function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [isLoading, setisLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function getSingleBlog() {
      try {
        setisLoading(true);
        const response = await fetch(`http://localhost:3000/blogs/${id}`);
        const data = await response.json();
        setBlog(data);
        setisLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    getSingleBlog();
  }, [id]);

  async function deleteBlogHandler(id) {
    try {
      const response = await fetch(`http://localhost:3000/blogs/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        navigate("/blogs");
      } else {
        console.error("Error deleting blog");
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <Navbar />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="details">
            <h2>{blog.title}</h2>
            <div>
              <p>{blog.snippet}</p>
            </div>
          </div>

          <div className="buttons">
            <Link to="/blogs" className="back">
              Back
            </Link>
            <button
              className="delete"
              onClick={(e) => {
                e.preventDefault();
                deleteBlogHandler(id);
              }}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </>
  );
}
