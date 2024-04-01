import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

console.log("listen on port")


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
);
