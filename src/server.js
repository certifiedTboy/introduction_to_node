const http = require("http");
const app = require("./app");
const server = http.createServer(app);

const PORT = 3000;

const startServer = async () => {
  server.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}...`);
  });
};

startServer();
