import express from "express";
import cors from "cors";
import mailController from "./controller/mail";
import safeConfig from "./config/config";
const app = express();
const port = safeConfig.SERVER_PORT;

app.use(express.json());
app.use(cors({origin: safeConfig.CORS_ALLOWED_ORIGINS}));

app.post("/mail", mailController.mail);

app.listen(port, () => {
  console.log(
    `server is listening at http://${safeConfig.SERVER_HOST}:${safeConfig.SERVER_PORT}`
  );
});
