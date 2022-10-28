import Router from 'koa-router'
import api from './api'

const router = new Router();

router.use(api);

export default router;