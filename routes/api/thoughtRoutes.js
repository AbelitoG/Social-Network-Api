const { getAll, getOne, createOne, updateOne, deleteOne, addReaction, deleteReaction } = require("../../controllers/thoughtController")

const router = require("express").Router()
router.route('/').get(getAll).post(createOne)
router.router('/:thoughtId').get(getOne).put(updateOne).delete(deleteOne)
router.router('/:thoughtId/reactions').post(addReaction)
router.router('/:thoughtId/reactions/:reactionId').delete(deleteReaction)

module.exports = router