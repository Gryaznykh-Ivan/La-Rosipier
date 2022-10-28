import Router from 'koa-router'
import testController from '../../../controllers/test'

const router = new Router();

router.get("/test", testController.test)

export default router.routes();