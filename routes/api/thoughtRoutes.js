const { getAll, getOne, createOne, updateOne, deleteOne, addReaction, deleteReaction } = require("../../controllers/thoughtController")

const router = require("express").Router()
router.route('/').get(getAll).post(createOne)
router.route('/:thoughtId').get(getOne).put(updateOne).delete(deleteOne)
router.route('/:thoughtId/reactions').post(addReaction)
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction)

module.exports = router