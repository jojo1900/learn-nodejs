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
    return exec(sql).then(rows => {
        return rows[0]
    })
}
const newBlog = (blogData = {}) => {
    const {
        title,
        content,
        author,
        createtime
    } = {
        ...blogData
    }
    const sql = ` insert into blogs (title, content, author, createtime) values ('${title}','${content}','${author}','${createtime}') ;`
    console.log("sql:", sql);
    return exec(sql).then(insertData => {
        console.log("insertData", insertData);
        return {
            id: insertData.insertId
        }
    })
}
const updateBlog = (id, blogData = {}) => {
    const {
        title,
        content
    } = {
        ...blogData
    }
    const sql = `
        update blogs set title='${title}',content='${content}' where id=${id}
    `
    // console.log("sql:", sql);
    return exec(sql).then(updateData => {
        console.log("updateData:", updateData);
        if (updateData.affectedRows > 0) {
            return true
        }
        return false
    })
}
const delBlog = (id, author) => {
    const sql = `delete from blogs where id=${id} and author='${author}'`
    return exec(sql).then(deleteData => {
        if (deleteData.affectedRows > 0) {
            return true
        }
        return false
    })
}
module.exports = {
    getBlogList,
    getBlogDetail,
    newBlog,
    updateBlog,
    delBlog
}