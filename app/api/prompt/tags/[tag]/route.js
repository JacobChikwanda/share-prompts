import { connectToDb } from "@database/connection"
import { Prompt } from "@database/models";

// GET
export const GET = async (req, {params}) => {
    try {
        await connectToDb();
        const prompts = await Prompt.find({tag: params.tag}).populate('creator');

        if (!prompts) {
            return new Response("Prompts not found", { status: 404 })
        }
        return new Response(JSON.stringify(prompts), {
            status: 200
        })
    } catch (error) {
        return new Response("Failed to fetch prompts", { 
            status: 500
        })
    }
}