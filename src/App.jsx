import { fetchPosts } from "./api/api";
import { useQuery } from "@tanstack/react-query";
import PostList from "./components/post-list";
import { useState } from "react";
import "./App.css";

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <h2 className="title">My Posts</h2>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <PostList />}
    </div>
  );
}

export default App;
