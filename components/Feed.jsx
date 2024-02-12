"use client"

import { useEffect, useState } from "react";
import PromptCardList from "./PromptCardList";

const Feed = () => {

  const [search, setSearch] = useState('');
  const [posts, setPosts] = useState([]);

  const handleSearchChange = async (e) => {}

  // Fetch data
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json();
      setPosts(data);
    }

    fetchPosts();
  })

  return (
    <section className="feed">
      <form className="relative w-full text-center">
        <input 
          type="text"
          placeholder="Search for a tag or a username"
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      <PromptCardList
        data={posts}
        handleTagClick={() => {}}
      />
    </section>
  )
}

export default Feed