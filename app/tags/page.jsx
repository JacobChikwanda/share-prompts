"use client"

import PromptCard from '@components/PromptCard';
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const TagsPage = () => {
  
    const searchParams = useSearchParams();
    const tag = searchParams.get('tag');

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPromptsByTag = async() => {
            const response = await fetch(`/api/prompt/tags/${tag}`);
            const data = await response.json();
            setPosts(data);
        }

        tag && getPromptsByTag();
    }, [tag])

    return (
        <section className="w-full">
            <h1 className="head_text text-left">
                <span className="blue_gradient">#{tag}</span>
            </h1>
            <div className="m-10 prompt_layout">
                {
                    posts.map((post) => (
                        <PromptCard
                            key={post._id}
                            post={post}
                            handleEdit={() => handleEdit && handleEdit(post)}
                            handleDelete={() => handleDelete && handleDelete(post)}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default TagsPage