class BaseModel {
    constructor(data, msg) {
        //可以只传一个参数，即不传data,只传msg
        if (typeof data === "string") {
            this.msg = data
            data = null
            msg = null
        }
        if (data) {
            this.data = data
        }

        if (msg) {
            this.msg = msg
        }
    }
}

class SuccessModel extends BaseModel {
    constructor(data, msg) {
        super(data, msg)
        this.errNum = 0
    }
}

class ErrorModel extends BaseModel {
    constructor(data, msg) {
        super(data, msg)
        this.errNum = -1
    }
}

module.exports = {
    SuccessModel,
    ErrorModel
}