
import { Context } from "koa";
import { Ok } from "../utils/response";


const test = async (ctx: Context) => {
    return Ok(ctx);
}

export = {
    test
}