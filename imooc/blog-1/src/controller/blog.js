const {
    exec
} = require('../db/mysql')
const getBlogList = (author, keyword) => {
    let sql = `select * from blogs where 1=1 `
    if (author) {
        sql += `and author='${author}' `
    }
    if (keyword) {
        sql += `and title like '%${keyword}%' `
    }
    sql += `order by createtime desc;`
    // console.log('sql:', sql);
    return exec(sql)
}

const getBlogDetail = (id) => {
    if (id === null || id === undefined) {
        return
    }
    let sql = `select content from blogs where id = '${id}'`
    return exec(sql)
}
const newBlog = (blogData = {}) => {
    if (blogData === {}) {
        return
    }

}
const updateBlog = (id, blogData = {}) => {

    return true
}
const delBlog = (id) => {
    return true
}
module.exports = {
    getBlogList,
    getBlogDetail,
    newBlog,
    updateBlog,
    delBlog
}