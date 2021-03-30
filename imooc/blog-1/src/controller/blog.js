const getBlogList = (author, keyword) => {
    return [{
        id: 1,
        title: "1title",
        content: "aaaa",
        author: "zhangsan",
        createTime: 1617032185881
    }, {
        id: 2,
        title: "2title",
        content: "bbbb",
        author: "zhangsan",
        createTime: 1617032185881
    }]
}

const getBlogDetail = (id) => {
    return {
        id: 2,
        title: "2title",
        content: "bbbb",
        author: "zhangsan",
        createTime: 1617032185881
    }
}
const newBlog = (blogData = {}) => {
    return {
        id: 3,
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