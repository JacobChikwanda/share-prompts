import { User } from "@database/models";

// Create
export async function create_user ({ username, email, image }) {
    try {
        const user = await User.create({
            username: username.replace(" ", "").toLowerCase(),
            email,
            image
        })
        return user;
    } catch (error) {
        console.error("Error creating user:", error);
        return null;
    }
}

// Fetch one
export async function fetch_user({ email }) {
    try {
        const user = await User.findOne({ email });
        return user
    } catch (error) {
        console.error("Error fetching user:", error);
        return null;   
    }
}
