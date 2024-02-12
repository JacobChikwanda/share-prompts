const { Prompt } = require("@database/models");

// 
export async function create_prompt ({ userId, prompt, tag }) {
    try {
        const newPrompt = await Prompt.create({
            creator: userId,
            prompt,
            tag
        })
        return newPrompt;
    } catch (error) {
        console.error("Error creating prompt:", error);
        return null;
    }
}