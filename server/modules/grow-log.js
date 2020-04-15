// 引入刚刚在第五点建立连接mysql数据库的db.js文件
const db = require('../config/db');
// 引入Sequelize对象
const Sequelize = db.sequelize;
// 引入上一步的文章数据表模型文件
const GrowLog = Sequelize.import('../schema/grow-log.js');
// 自动创建表
GrowLog.sync({force: false});

class GrowLogModel {
    /**
     * 创建文章模型
     * @param data
     * @returns {Promise<*>}
     */
    static async createGrowLog(data) {
        return await GrowLog.create({
            title: data.title, // 文章标题
            author: data.author, // 文章作者
            content: data.content, // 文章内容
        })
    }

    /**
     * 查询取文章详情数据
     * @param id  文章ID
     * @returns {Promise<Model>}
     */
    static async getGrowLogDetail(id) {
        return await GrowLog.findOne({
            where: {
                id,
            },
        })
    }
}

module.exports = GrowLogModel