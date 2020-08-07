/*
// import {serve} from "https://deno.land/std@0.63.0/http/server.ts";
import {serve} from "https://deno.land/std/http/server.ts";
// import { Response } from "https://deno.land/std@0.53.0/http/server.ts";
const server = serve({port: 33001});
console.log("http://localhost:33001/");
for await (const req of server) {
    req.respond({body: "Hello World\n"});
}
*/
// helloServer.ts
/*import { Request, Response, createHttpServer } from "deno";

const server = createHttpServer((req: Request, res: Response) => {
    res.write(`[${req.method}] ${req.path} Hello world!`);
    res.end();
});

server.listen(3000);*/
