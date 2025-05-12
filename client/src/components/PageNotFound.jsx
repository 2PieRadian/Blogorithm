import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function PageNotFound() {
  return (
    <>
      <Navbar />
      <div className="notFoundPage">
        <h1>Page Not Found</h1>
        <Link to="/" className="notFoundHomeLink">
          Go to HomePage
        </Link>
      </div>
    </>
  );
}
