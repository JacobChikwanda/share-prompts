"use client"

import Profile from "@components/Profile";
import { useSession } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ProfilePage = () => {

    const { data: session } = useSession();
    const [posts, setPosts] = useState([]);
    
    const router = useRouter();
    const searchParams = useSearchParams();
    const username = searchParams.get('username');
    const email = searchParams.get('email');
    const userId = searchParams.get('id');

    const handleEdit = (post) => {
        router.push(`/update-prompt?id=${post._id}`)
    }
    
    const handleDelete = async (post) => {
      const hasConfirmed = confirm("Are you sure you want to delete this prompt?");

      if (hasConfirmed) {
        try {
          await fetch(`/api/prompt/${post._id.toString()}`, { method: 'DELETE' });
          const filteredPosts = posts.filter(p => p._id !== post._id);
          setPosts(filteredPosts)
        } catch (error) {
          console.error("Some error occured:", error);
        }
      }
    }

    // Fetch data
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
      setPosts(data);
    }

    const fetchPostsByEmail = async () => {
      const response = await fetch(`/api/prompt/email/${email}`);
      const data = await response.json();
      setPosts(data);
    }

    if(session?.user.id) {
      fetchPosts()
    } else {
      fetchPostsByEmail()
    }
  })

    return (
        <Profile
            name={ session?.user.id ? 'My' : username }
            desc={ session?.user.id ? "Welcome to your personalized profile page" : `Welcome to ${username}'s personalized profile page` }
            data={posts}
            handleEdit={handleEdit}
            handleDelete={handleDelete} 
        />
    )
}

export default ProfilePage