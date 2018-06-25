const koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
let router = new Router();

const mongoose = require('mongoose');
const fs = require('fs');

router.get('/insertAllCategory', async (ctx) => {
  fs.readFile('./data_json/category.json', 'utf8', (err, data) => {
    data = JSON.parse(data);
    let saveCount = 0;
    const goods = mongoose.model('Goods');
    data.map((value, index) => {
      console.log(value);
      let newGoods = new goods(value);
      newGoods.save().then(() => {
        saveCount++;
        console.log('成功' + saveCount);
      }).catch((err) => {
        console.log('失败' + err)
      });
    })
  })
  ctx.body = '开始导入数据'
})
module.exports = router;
