import {Application, Router} from "https://deno.land/x/oak/mod.ts";
import UserRouter from './use-router.ts';
// import AdminRouter from "./admin-router.ts";

const app = new Application();
const router = new Router();

router.get("/", (ctx: any) => {
    ctx.response.body = "Hello World";
})


app.use(router.routes());
app.use(router.allowedMethods());

app.use(UserRouter.routes());
app.use(UserRouter.allowedMethods());
// app.use(AdminRouter.routes());
// app.use(AdminRouter.allowedMethods());
console.log('success 8080')
await app.listen({port: 8080});
