import {Router} from "https://deno.land/x/oak/mod.ts";

const AdminRouter = new Router({prefix: "/admin"}); //以admin开头的uri
AdminRouter.get("/", (ctx: any) => {
    ctx.response.body = "Hello Admin";
})

export default AdminRouter;
