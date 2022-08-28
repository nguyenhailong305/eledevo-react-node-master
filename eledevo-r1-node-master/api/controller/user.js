const Models = require('../model/user')

exports.getItem = async (req , res , next) => {
    try {
        const listData = await Models.find({})
        res.send({ listData : listData  , message : "success"})
    } catch (error) {
        res.send({error: error})
    }
}
exports.addItem = async (req , res , next) => {
    try {
        const name = req.body.name
        const code = req.body.code
        const codeSubject = req.body.codeSubject
        await Models.create({name : name , code : code , codeSubject : codeSubject})
        res.send({ message : "success"})
    } catch (error) {
        res.send({error: error})
    }
}

exports.deleteItem = async (req , res , next) => {
    try {
        const id = req.params.id
        await Models.findByIdAndDelete(id)
        res.send({ message : "success"})
    } catch (error) {
        res.send({error: error})
    }
}

exports.updateItem = async (req , res , next) => {
    try {
        const id = req.params.id
        const name = req.body.name
        const code = req.body.code
        const codeSubject = req.body.codeSubject
        await Models.findByIdAndUpdate(id , {name: name , code : code , codeSubject : codeSubject})
        res.send({ message : "success"})
    } catch (error) {
        res.send({error: error})
    }
}

exports.paginateItem = async (req , res , next) => {
    try {
        const activePage = parseInt(req.query.activePage)
        const limit = parseInt(req.query.limit)
        const skip = (activePage - 1)*limit 
        const totalRecord = await Models.countDocuments({})
        const totalPage = Math.ceil(totalRecord / limit)
        const listData = await Models.find({}).skip(skip).limit(limit)
        res.send({ listData : listData , totalPage, message : "success"})
    } catch (error) {
        res.send({error: error})
    }
}



exports.searchItem = async (req , res , next) => {
    try {
        const name = req.query.textSearch
        const activePage = parseInt(req.query.activePage)
        const limit = parseInt(req.query.limit)
        const skip = (activePage - 1)*limit 
        const totalRecord = await Models.countDocuments({name : {$regex : name , $options : 'i'}})
        const totalPage = Math.ceil(totalRecord / limit)
        const listData = await Models.find({name : {$regex : name , $options : 'i'}}).skip(skip).limit(limit)
        res.send({ listData : listData , totalPage, message : "success"})
    } catch (error) {
        res.send({error: error})
    }
}