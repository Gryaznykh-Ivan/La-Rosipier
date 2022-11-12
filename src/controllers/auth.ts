import { Context } from "koa";
import { Ok } from "../utils/response";

const login = async (ctx: Context) => {
    return Ok(ctx);
}

const sendVerificationCode = async (ctx: Context) => {
    return Ok(ctx);
}

const refresh = async (ctx: Context) => {
    return Ok(ctx);
}

export = {
    login,
    sendVerificationCode,
    refresh
}