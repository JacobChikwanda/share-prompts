"use client"

import { useEffect, useState } from "react";
import PromptCardList from "./PromptCardList";
import { filterData } from "@utils/filter";

const Feed = () => {

  const [search, setSearch] = useState('');
  const [posts, setPosts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const handleSearchChange = (e) => {
    e.preventDefault()
    setSearch(e.target.value);
    
    // Filter data
    const newPosts = filterData({ searchQuery: e.target.value, data: posts })
    console.log(newPosts);
    setFilteredData(newPosts);
  }

  // Fetch data
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json();
      setPosts(data);
    }

    fetchPosts();
  }, [])

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
        data={search ? filteredData : posts}
      />
    </section>
  )
}

export default Feed