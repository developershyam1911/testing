// const fs = require('fs')
// fs.writeFile('./test.txt', 'hello sir ji' , ((err)=>{
//     console.log(err)
// }))
// fs.cpSync('./text.txt', './test.txt')
// const res = fs.readFileSync('./text.txt', 'utf-8')
// console.log(res)
// fs.appendFileSync('text.txt' , 'my new entry')
// fs.unlinkSync('test.txt')

const http = require('http')
const myserver = http.createServer((req, res)=>{
    console.log('new req recive')
    res.end('hello from server')
});
myserver.listen(8000, (()=>{
    console.log('server started')
}))


