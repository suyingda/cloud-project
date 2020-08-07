import {serve, ServerRequest} from "https://deno.land/std/http/server.ts";
// import {getCookies} from "https://deno.land/std/http/cookie.ts";

let request = new ServerRequest();
request.headers = new Headers();
request.headers.set("Access-Control-Allow-Origin", "*");
request.headers.set("Cookie", "full=of; tasty=chocolate");
const setHeader = {
    headers: new Headers({
        "Access-Control-Allow-Origin": '*',
        "content-type": "text/html; charset=UTF-8"
    }),
}
const query = {
    code: 0,
    data: [
        {
            label: '更新',
            href: '/samples/index',
            content: `<a href="/samples/index.html">全新慕课网大前端</a>内容，新增Babel结合gains的使用案例`,
        }
    ],
    message: 'no message'
}

console.log('8080')
const server = serve({port: 8080});
for await (const req of server) {
    // console.log(req)
    switch (req.url) {
        case '/user':
            req.respond({
                ...setHeader,
                body: JSON.stringify(query)
            });
            break;
        default:
            req.respond({body: "Hello World\n"});
            break;
    }
    console.log(req.url)

}

