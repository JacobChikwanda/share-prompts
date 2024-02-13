import { connectToDb } from "@database/connection"
import { Prompt, User } from "@database/models";

// GET
export const GET = async (req, {params}) => {
    try {
        await connectToDb();

        // Find the user
        const user = await User.findOne({ email: params.email });

        if (!user) {
            return new Response("User not found", { status: 404 });
        }

        const prompts = await Prompt.find({creator: user._id}).populate('creator');

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