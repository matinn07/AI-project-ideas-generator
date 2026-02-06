import mongoose from "mongoose";

const ideaSchema = new mongoose.Schema(
  {
    skills: { type: String, required: true },
    level: { type: String, required: true },
    goal: { type: String, required: true },
    ideas: { type: String, required: true }
  },
  { timestamps: true }
);

const Idea = mongoose.model("Idea", ideaSchema);

export default Idea;
