import { NavLink } from "react-router-dom";

export default function Blogs({ blogs }) {
  return (
    <>
      {blogs.map((blog) => (
        <NavLink to={blog._id} key={blog._id}>
          <div className="card">
            <h3>{blog.title}</h3>
            <p>{blog.snippet.substring(0, 150)}...</p>
          </div>
        </NavLink>
      ))}
    </>
  );
}
