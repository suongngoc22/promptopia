"use client";

import React, { useEffect, useState } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard key={post.id} post={post} handleTagClick={handleTagClick} />
      ))}
    </div>
  );
};

const Feed = () => {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const jsonData = await response.json();
    };
  }, []);

  const handleSearch = (e) => {};

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={search}
          onChange={handleSearch}
          className="text-sm py-4 px-4 outline-none w-full"
        />
      </form>
    </div>
  );
};

export default Feed;
