import express from "express";
import routes from "./frontend/routes";
import cors from "cors";

const app = express();

app.set('port', process.env.PORT || 8080);

try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}

app.use(cors());
app.use(express.json());
app.use('/', routes);

app.listen(8080, () => console.log('Server running at port 8080'));
