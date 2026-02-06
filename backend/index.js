import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import aiRoutes from "./routes/aiRoute.js";

const app = express();

/* ✅ KEEP CORS */
app.use(cors());
app.use(express.json());

/* ✅ KEEP ROUTES */
app.use("/api/ai", aiRoutes);

/* ✅ USE YOUR ORIGINAL MONGODB CONNECTION */
mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/ai_project_generator")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Error:", err));

/* ✅ START SERVER */
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
