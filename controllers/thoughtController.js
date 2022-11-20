const {Thought, User} = require("../models")



module.exports = {
    async getAll(req, res){
        try {
            const data = await Thought.find()
            res.json(data)
        } catch (err) {
            res.status(500).json(err.message)
        }
    },
    async getOne (req, res){
        try {
            const data = await Thought.findById(req.params.thoughtId)
            res.json(data)
        } catch (err) {
            res.status(500).json(err.message)
        }
    },
    async createOne (req, res){
        try {
            const data = await Thought.create(req.body)
            const userData = await User.findOneAndUpdate({username:req.body.username},{$addToSet:{thoughts : data._id}})
            res.json(data)
        } catch (err) {
            res.status(500).json(err.message)
        }
    },
    async updateOne (req, res){
        try {
            const data = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, {runValidators: true, new: true})
            res.json(data)
        } catch (err) {
            res.status(500).json(err.message)
        }
    },
    async deleteOne (req, res){
        try {
            const data = await Thought.findByIdAndDelete(req.params.thoughtId, {runValidators: true, new: true})
            res.json(data)
        } catch (err) {
            res.status(500).json(err.message)
        }
    },
    async addReaction (req, res){
        try {
            const data = await Thought.findByIdAndUpdate(req.params.thoughtId, {$addToSet: {reactions: req.body}}, {runValidators: true, new: true})
            res.json(data)
        } catch (err) {
            res.status(500).json(err.message)
        }
    },
    async deleteReaction (req, res){
        try {
            const data = await Thought.findByIdAndUpdate(req.params.thoughtId, {$pull: {reactions: {reactionId:req.params.reactionId}}}, {runValidators: true, new: true})
            res.json(data)
        } catch (err) {
            res.status(500).json(err.message)
        }
    }
};