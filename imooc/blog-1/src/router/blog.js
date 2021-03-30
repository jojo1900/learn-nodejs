const {
    getBlogList,
    getBlogDetail,
    newBlog,
    updateBlog,
    delBlog
} = require('../controller/blog')
const {
    SuccessModel,
    ErrorModel
} = require('../model/resModel')

const handleBlogRouter = (req, res) => {
    const method = req.method
    const id = req.query.id

    //获取博客列表
    if (method === "GET" && req.path === "/api/blog/list") {
        const author = req.query.author || ""
        const keyword = req.query.keyword || ""
        const result = getBlogList(author, keyword)
        return result.then(listData => {
            return new SuccessModel(listData)
        })
    }
    //获取博客内容
    if (method === "GET" && req.path === "/api/blog/detail") {
        const result = getBlogDetail(id)
        // return new SuccessModel(detailData)
        return result.then(content => {
            return new SuccessModel(content)
        })
    }
    //新增博客
    if (method === "POST" && req.path === "/api/blog/new") {
        const blogData = req.body
        const data = newBlog(blogData)
        return new SuccessModel(data)
    }
    // 更新博客
    if (method === "POST" && req.path === "/api/blog/update") {
        const result = updateBlog(id, req.body)
        if (result) {
            return new SuccessModel()
        } else {
            return new ErrorModel()
        }
    }

    // 删除博客
    if (method === "POST" && req.path === "/api/blog/del") {
        const result = delBlog(id)
        if (result) {
            return new SuccessModel()
        } else {
            return new ErrorModel()
        }
    }
}

module.exports = handleBlogRouter