import express from 'express';
import userRoutes from './routes/user.routes.js';
import { config } from 'dotenv';


const app = express();


app.use(express.json());

app.use("/products", userRoutes);
config();


// app.use((req, res, next) => {
//     console.log(`${req.method} ${req.url}`);
//     next();
// });
app.listen(3000, () => {
    console.log("Listening to port 3000");
});

