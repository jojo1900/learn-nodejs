// windows 启动mysql
//NzH/u>LWt3wP
//net start mysql
//net stop mysql
const env = process.env.NODE_ENV //环境参数
let MYSQL_CONF

if (env === "dev") {
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: '123456a?',
        database: 'myblog1'
    }

}

if (env === "production") {
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: '123456a?',
        database: 'myblog1'
    }
}

module.exports = {
    MYSQL_CONF
}