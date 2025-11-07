import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
const PORT = process.env.PORT || 5000;


// middlewhere

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({origin: '*'}));



app.get('/', (req, res) => {
    res.send("API is running....");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
