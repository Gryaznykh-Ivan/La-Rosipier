import Router from 'koa-router'
import v1 from './v1'

const router = new Router().prefix('/api');

router.use(v1)

export default router.routes();