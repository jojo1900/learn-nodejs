const http = require("http")
const querystring = require('querystring')


const server = http.createServer((req, res) => {
    console.log("请求方式:" + req.method);
    const url = req.url
    console.log("url:", url);
    if (req.method === "GET") {
        req.query = querystring.parse(url.split("?")[1])
        console.log("query", req.query);
        res.end(JSON.stringify(req.query))
    } else if (req.method === "POST") {
        console.log("req content-type", req.headers['content-type']);
        //接收数据
        let postData = ""

        req.on('data', chunk => {
            postData += chunk.toString()
        })
        req.on('end', () => {
            console.log("postData:", postData);
            res.setHeader('Content-type', 'application/json')
            const resData = {
                "name": "111"
            }
            res.end(JSON.stringify(resData))
        })

    }
})


server.listen(9900)