import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import CreateBlog from "./components/CreateBlog";
import BlogDetails from "./components/BlogDetails";
import PageNotFound from "./components/PageNotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="/blogs" />} />
        <Route path="/blogs" element={<Home />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />

        <Route path="/about" element={<About />} />
        <Route path="/create" element={<CreateBlog />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
