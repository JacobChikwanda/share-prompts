import { connectToDb } from "@database/connection"
import { create_prompt } from "@service/promptService"

export const POST = async (req) => {
    const { userId, prompt, tag } = await req.json();
    const FAILED_STATUS = new Response("Failed to create a new prompt.", { status: 500 });
    
    try {
        await connectToDb()
        const newPrompt = await create_prompt({ userId, prompt, tag });
        if (!newPrompt) {
            return FAILED_STATUS;
        }
        return new Response(JSON.stringify(newPrompt), { status: 201 });
    } catch (error) {
        console.error("Error occured while creating prompt:", error);
        return FAILED_STATUS
    }
}