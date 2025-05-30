import NavBar from "./Navbar";
import Footer from "./Footer";

export default function About() {
  return (
    <div>
      <NavBar />
      <div className="about">
        <h2>About Us</h2>
        <p>
          Welcome to Blogorithm — a space where thoughts aren’t just written,
          they compute. This isn’t your regular “dear diary” blog. It’s a fusion
          of brain meets bytes, logic meets life, and code meets curiosity.
        </p>
        <br />
        <p>
          I’m Raman Bhardwaj, a Computer Science student at ABES Engineering
          College. I spend most of my time untangling logic puzzles, building
          web projects, and diving headfirst into the fascinating world of
          Machine Learning. When I’m not coding, you might find me strumming my
          guitar, overthinking life, or trying to beat my own record in
          competitive programming.
        </p>

        <div className="line"></div>

        <h2>🛠️ What’s this blog about?</h2>
        <p>
          Blogorithm is my digital lab. Here, I document everything I learn,
          build, and break — from beginner-friendly tutorials and tech tips, to
          rants about AI, development projects, and thoughts on the
          ever-evolving world of code.
        </p>
        <br />
        <p>
          You’ll find: 🔍 Articles on Web Development, JavaScript, React, and
          more 🤖 Explorations into Machine Learning and AI ⚔️ Competitive
          Programming tactics and personal progress 📓 Honest reflections on my
          journey through CS engineering
        </p>

        <div className="line"></div>

        <h2>🌱 Why Blogorithm?</h2>
        <p>
          The name Blogorithm comes from a mix of “Blog” and “Algorithm” —
          because that’s what my mind is constantly doing: solving, looping,
          optimizing. This blog is my attempt to make sense of the chaos — one
          post, one bug fix, one breakthrough at a time.
        </p>
        <br />
        <p>
          So whether you're here to learn, vibe, or just scroll through the mind
          of a CS student trying to navigate the matrix — welcome aboard.
        </p>
        <br />
        <p>
          Grab a coffee, open your terminal, and let's debug life together. 💻🧠
        </p>
        <div className="line"></div>
      </div>
      <Footer />
    </div>
  );
}
