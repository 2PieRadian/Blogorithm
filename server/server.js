const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

const Blog = require("./models/Blog");

const app = express();

app.use(express.json());
app.use(cors());

require("dotenv").config();

// Connect to mongoDB Atlas
const dbURI = process.env.MONGO_URI;

const PORT = process.env.PORT || 3000;
// Connecting to the mongoDB Atlas using 'mongoose'
mongoose
  .connect(dbURI)
  .then((result) => {
    console.log("Connected to DB");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));

// Using 'morgan' to log request details.
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// This is a middleware function that parses incoming requests with URL-encoded payloads, which is the default format for form submissions.
app.use(express.urlencoded({ extended: true }));

/* ---------- Route Handlers ---------- */
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

// Send the blogs json to frontend
app.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 }) // Newest at the Top
    .then((result) => res.json(result))
    .catch((err) => res.status(500).json({ error: "Failed to fetch blogs" }));
});

app.post("/create", (req, res) => {
  const { title, snippet } = req.body;
  const blog = new Blog({
    title,
    snippet,
  });

  blog
    .save()
    .then(() => {
      res.status(201).send("Blog created successfully!");
    })
    .catch((err) => res.status(500).send("Blog could not be created."));
});

// Get Single Blog
app.get("/blogs/:id", (req, res) => {
  Blog.findById(req.params.id)
    .then((result) => res.json(result))
    .catch((err) => res.status(404).json({ error: "Blog not found." }));
});

// Delete a Blog
app.delete("/blogs/:id", (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then(() => {
      res.status(200).json("Blog deleted successfully.");
    })
    .catch((err) => res.status(500).json("Blog could not be deleted!"));
});

app.use((req, res) => {
  res.status(404).json({ error: "Page not found!" });
});
