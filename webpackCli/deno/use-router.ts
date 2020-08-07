import {Router} from "https://deno.land/x/oak/mod.ts";

const UserRouter = new Router({prefix: "/user"});

const query = {
    code:0,
    data:{},
    message:'no message'
}
UserRouter.get("/", (ctx: any) => {
    console.log(666)
    ctx.response.body = query;
}).get("/:id", (ctx: any) => {
    ctx.response.body = "the user is is " + ctx.params.id;
})

export default UserRouter;
