import { connectToDb } from "@database/connection"
import { Prompt } from "@database/models";

export const GET = async (req, res) => {
    try {
        await connectToDb();
        const prompts = await Prompt.find({}).populate('creator');
        return new Response(JSON.stringify(prompts), {
            status: 200
        })
    } catch (error) {
        return new Response("Failed to fetch all prompts", { 
            status: 500
        })
    }
}