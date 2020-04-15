const Router = require('koa-router')
const GrowLogController = require('../controllers/grow-log')

const router = new Router({
    prefix: '/api/v1'
})

/**
 * 文章接口
 */
// 创建文章接口（路由）
router.post('/grow', GrowLogController.create);
// 获取文章详情接口（路由）
router.get('/grow/:id', GrowLogController.detail);

module.exports = router
