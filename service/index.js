// 引入koa2
const koa = require('koa')
//  引入初始化数据库js
const {connect} = require('./database/init.js')
// 声明koa 赋值给变量
const app = new koa();

// 页面打印koa是否引入成功
app.use(async (ctx) => {
  ctx.body = `<h1>hello koa2</h1>`
})
// 监听，判断服务是不是启动成功
app.listen('3000', () => {
  console.log('[server] starting at port 3000')
});
// 立即执行函数
async () => {
  await connect()
}
