import  express  from "express";
import cors from "cors";
import cookieParser from "cookie-parse"

const app = express();

app.use(cors({
    origin: "http://localhost:3000"
}));
app.use(express.json({limit: "26kb"}))
app.use(express.urlencoded({extended: true}))
app.use(express.static("public")) // for store the public assets
app.use(cookieParser());
export default app;