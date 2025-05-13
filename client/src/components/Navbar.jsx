import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="site-title">
        <Link to="/">👾 Blogorithm</Link>
        <p>Not Just a Blog. A Blogorithm.</p>
      </div>

      <ul>
        <li className="x">
          <NavLink to="/blogs">Blogs</NavLink>
        </li>
        <li className="x">
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/create">Create a Blog</NavLink>
        </li>
      </ul>
    </nav>
  );
}
