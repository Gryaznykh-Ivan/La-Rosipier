import jwt, { JsonWebTokenError } from 'jsonwebtoken';
import { Context, Next } from 'koa';
import { Unauthorized } from '../utils/response'

export default async (ctx: Context, next: Next) => {
    try {
        const token = ctx.request.headers['authorization']?.split(' ')[1];
        
        if (token !== undefined) {
            const decoded = jwt.verify(token, process.env.SECRET as string);
            ctx.request.user = decoded;
        }

        return next();
    } catch(e: any) {
        if (e instanceof JsonWebTokenError) {
            return Unauthorized(ctx, e.message);
        }

        ctx.throw(e.status, e.message);
    }
}