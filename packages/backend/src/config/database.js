require("../bootstrap");
module.exports = {
  dialect: process.env.DB_DIALECT || "mysql",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  storage: "./src/database/database.sqlite",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};
