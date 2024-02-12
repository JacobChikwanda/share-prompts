import { Schema, model, models } from "mongoose";

const promptSchema = new Schema({
   creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
   },
   prompt: {
    type: String,
    require: [true, "Prompt is required."]
   },
   tag: {
    type: String,
    require: [true, "Tag is required."]
   }
})

const Prompt = models.Prompt || model("Prompt", promptSchema);

export default Prompt;