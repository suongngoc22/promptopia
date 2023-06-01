"use client";

import React, { useEffect, useState } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick, searchText }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data
        .filter((post) => {
          return searchText.toLowerCase() === ""
            ? post
            : post.prompt.toLowerCase().includes(searchText) ||
                post.tag.toLowerCase().includes(searchText) ||
                post.creator.username.toLowerCase().includes(searchText);
        })
        .map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleTagClick={handleTagClick}
          />
        ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
    console.log(posts);
  }, []);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <section className="feed">
      <form className="w-full">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          required
          onChange={handleSearchChange}
          className="search_input peer"
        />
      </form>
      <PromptCardList
        data={posts}
        handleTagClick={() => {}}
        searchText={searchText}
      />
    </section>
  );
};

export default Feed;
