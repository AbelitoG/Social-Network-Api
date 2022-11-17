const {Thought, User} = require("../models")
const { updateOne } = require("../models/thought")




module.exports = {
    async getAll(req, res){
        try {
            const data = await User.find()
            res.json(data)
        } catch (err) {
            res.status(500).json(err.message)
        }
    },
    async getOne (req, res){
        try {
            const data = await User.findById(req.params.userId).populate("thoughts").populate("friends")
            res.json(data)
        } catch (err) {
            res.status(500).json(err.message)
        }
    },
    async createOne (req, res){
        try {
            const data = await User.create(req.body)
            res.json(data)
        } catch (err) {
            res.status(500).json(err.message)
        }
    },
    async updateOne (req, res){
        try {
            const data = await User.findByIdAndUpdate(req.params.userId, req.body, {runValidators: true, new: true})
            res.json(data)
        } catch (err) {
            res.status(500).json(err.message)
        }
    },
    async deleteOne (req, res){
        try {
            const data = await User.findByIdAndDelete(req.params.userId, {runValidators: true, new: true})
            res.json(data)
        } catch (err) {
            res.status(500).json(err.message)
        }
    },
    async addFriend (req, res){
        try {
            const data = await User.findByIdAndUpdate(req.params.userId, {$addToSet: {friends: req.params.friendId}}, {runValidators: true, new: true})
            res.json(data)
        } catch (err) {
            res.status(500).json(err.message)
        }
    },
    async deleteFriend (req, res){
        try {
            const data = await User.findByIdAndUpdate(req.params.userId, {$pull: {friends: req.params.friendId}}, {runValidators: true, new: true})
            res.json(data)
        } catch (err) {
            res.status(500).json(err.message)
        }
    }
};