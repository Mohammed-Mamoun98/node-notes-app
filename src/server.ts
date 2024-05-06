import env from "./utils/envValidator";
import app from "./app";
import { connectDb } from "./configs/db.config";
import { config } from "./configs/general.config";

const { port } = config;

connectDb().then(() => {
  app.listen(port, () => {
    console.log("Server is up at port", port);
  });
});
