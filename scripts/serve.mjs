import { createReadStream } from "node:fs";
import { createServer } from "node:http";

const server = createServer((_request, response) => {
  response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
  createReadStream("dist/index.html").pipe(response);
});

server.listen(4173, "127.0.0.1");
