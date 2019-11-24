const program = require('commander');
const api = require('./index.js')

program
    .option('-x, --xxx', 'test option')
program
    .command('add')
    .description('add a task')
    .action((...args) => {
        const words = args.pop().join(' ')
        api.add(words).then(() => {
            console.log('添加成功')
        }, () => {
            console.log('添加失败')
        })
    });
program
    .command('clear')
    .description('clear all task')
    .action(() => {
        api.clear().then(() => {
            console.log('清除成功');
        }, () => {
            console.log('清除失败');
        })
    });

program.parse(process.argv);

if (process.argv.length === 2) {
    api.showAll()
}