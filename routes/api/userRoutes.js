const router = require("express").Router()
const {getAll, getOne, createOne, updateOne, deleteOne, addFriend, deleteFriend} = require("../../controllers/userController")
router.route('/').get(getAll).post(createOne)
router.route('/:userId').get(getOne).put(updateOne).delete(deleteOne)
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend)


module.exports = router