import jwt, { JsonWebTokenError } from 'jsonwebtoken';
import { Context, Next } from 'koa';
import { Unauthorized } from '../utils/response'

export default async (ctx: Context, next: Next) => {
    try {
        
        if (ctx.request.user === undefined) {
            return ctx.throw(401, "Token was not provided");
        }

        return next();
    } catch(e: any) {
        if (e instanceof JsonWebTokenError) {
            return Unauthorized(ctx, e.message);
        }
        
        ctx.throw(e.status, e.message);
    }
}