const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    const homeFile = fs.readFile("./public/index.html", null, (error, data) => {
      if (error) {
        res.writeHead(404);
        res.write("Whoops! File not found!");
      } else {
        res.write(data);
      }
      res.end();
    });
  } else if (req.url === "/contact" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("./public/contact.html", null, (error, data) => {
      if (error) {
        res.writeHead(404);
        res.write("Whoops! File not found!");
      } else {
        res.write(data);
      }
      res.end();
    });
  } else if (req.url === "/about" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("./public/about.html", null, (error, data) => {
      if (error) {
        res.writeHead(404);
        res.write("Whoops! File not found!");
      } else {
        res.write(data);
      }
      res.end();
    });
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "No page found" }));
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}...`);
});
