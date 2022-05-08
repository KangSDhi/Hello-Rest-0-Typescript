import express from "express";
import routes from "./app";

const app = express();

app.use(express.json());
app.use(routes);
app.listen(3002, () => {
    console.log('server start');
    
});