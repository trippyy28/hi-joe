const userService = require('./user.service')
const logger = require('../../services/logger.service')

async function getUser(req, res) {
    const user = await userService.getById(req.params.id)
    res.send(user)
}

async function getUsers(req, res) {
    const users = await userService.query(req.params.filter)
    res.send(users)
}

async function countUsers(req, res) {
    console.log('back controller - count');
    const count = await userService.count()
    res.send(count);
}

async function getAllUsers(req, res) {
    const queryPage = req.query.page;
    const pageSize = 2;
    const users = await userService.query2(queryPage, pageSize);
    res.send(users)
}

async function deleteUser(req, res) {
    await userService.remove(req.params.id)
    res.end()
}

async function updateUser(req, res) {
    const user = req.body;
    await userService.update(user)
    res.send(user)
}

module.exports = {
    getUser,
    getAllUsers,
    getUsers,
    deleteUser,
    updateUser,
    countUsers
}