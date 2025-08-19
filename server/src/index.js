import express from "express"
import cors from "cors"
import "dotenv/config"
import mongodbConnection from "./utils/mongodb.connection.js";
import userRouter from "./routes/user.routes.js";

const app = express();
app.use(cors({
    origin: ["http://localhost:5173/","https://mern-render-vercel-client.vercel.app"],
    credentials: true
}));
app.use(express.json())
mongodbConnection();

app.use("/api/user", userRouter)

app.listen(3000, () => {
    console.log("Server start on port 3000")
})

