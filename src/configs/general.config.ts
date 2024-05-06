import env from "../utils/envValidator";

export const config = {
  port: env.PORT || 5001,
  dbConnectionString: env.MONGO_DB_CONNECTION_STRING,
};
