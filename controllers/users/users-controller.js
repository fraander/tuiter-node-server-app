import people from './users.js'

let users = people

const UserController = (app) => {
    app.get('/api/users', findUsers);
    app.get('/api/users/:uid', findUserById);
}

const findUsers = (req, res) => {
    const type = req.query.type

    if (type) {
        res.json(users.filter(u => u.type === type))
    } else {
        res.json(users)
    }
}

const findUserById = (req, res) => {
    const userId = req.params.uid;
    const user = users
        .find(u => u._id === userId);
    res.json(user);
}


export default UserController