"use client"
import Form from '@components/Form'
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const UpdatePrompt = () => {

    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        prompt: '',
        tag: ''
    })
    const searchParams = useSearchParams();
    const promptId = searchParams.get('id')

    useEffect(() => {
        const getPromptDetails = async() => {
            const response = await fetch(`/api/prompt/${promptId}`, {
                method: 'GET'
            });
            const data = await response.json();
            
            setPost({
                prompt: data.prompt,
                tag: data.tag
            });
        }

        if (promptId) {
            getPromptDetails()
        }
    }, [promptId])

    const router = useRouter();

    const updatePrompt = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        if (!promptId) {
            return alert('Prompt id is missing.')
        }

        try {
           const response = await fetch(`/api/prompt/${promptId}`, {
            method: 'PATCH',
            body: JSON.stringify({
                prompt: post.prompt,
                tag: post.tag
            })
           });

           if (response.ok) {
            router.push('/');
           }
        } catch (error) {
            console.error("Something went wrong while creating the post:", error);
        } finally {
            setSubmitting(false);
        }
    }
    
    return (
        <Form
            type='Edit'
            post={post}
            setPost={setPost}
            submitting={submitting}
            handleSubmit={updatePrompt}
        />
    )
}

export default UpdatePrompt