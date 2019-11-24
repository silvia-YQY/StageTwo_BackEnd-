const db = require('./db.js')

module.exports.add = async (title) => {
    // 读取之前的任务
    const list = await db.read()  // 由于read为异步，故需要await等待返回后再继续
    // 添加一个 title 任务
    list.push({ title, done: false })
    // 存储任务到文件
    await db.write(list)
}