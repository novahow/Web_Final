const { v4: uuid } = require("uuid/")
const { db } = require("../models/user")
const Mutation = {
    async createUser(parent, { data }, { User, pubsub }, info) {
        //console.log(data)
        const user = {
            id: uuid(),
            popularity: 0,
            totalVoting: 0,
            ...data
        }

        await User.create(user)

        pubsub.publish('user', {
            user: {
                mutation: 'CREATED',
                data: user
            }
        })
        /*
        pubsub.publish(`post ${args.data.fromUser}`, {
            post: {
                mutation: 'CREATED',
                data: post
            }
        })*/
        return user
    },

    async createLoginUser(parent, { data }, { LoginUser, pubsub }, info) {
        const loginUsers = await LoginUser.findOne({ name: data.name })
        console.log(data)
        console.log(loginUsers)
        let ret
        if (loginUsers) {
            ret = { state: "ERROR", data: null }
            return ret
        }
        const loginUser = {
            id: uuid(),
            ...data,
            favorite: []
        }
        await LoginUser.create(loginUser)
        pubsub.publish('loginUser', {
            loginUser: {
                mutation: 'CREATED',
                data: loginUser,
            }
        })
        ret = { state: "SUCCESS", data: loginUser }
        return ret
    },

    async updateUserPopularity(parent, { data }, { User, pubsub }, info) {
        //await User.update({id: data.id},{$set: {popularity: {popularity} * {totalVoting} + data.stars / ({totalVoting} + 1), totalVoting: {totalVoting} + 1}})
        await User.update({ id: data.id }, { $inc: { popularity: data.stars, totalVoting: 1 } })
        const user = await User.findOne({ id: data.id })
        console.log(user)
        console.log(user.name)
        return user
    },
    async deleteUser(parent, { id }, { User }, info) {
        const { deletedCount } = await User.deleteOne({ id: id })
        let state
        if (deletedCount === 0) {
            state = "User not found!"
        }
        else {
            state = `${deletedCount} users are deleted`
        }
        const ret = { state: state }
        return ret
    },
    async deleteAllUsers(parent, args, { User }, info) {
        const { deletedCount } = await User.deleteMany({})
        let state = `${deletedCount} users are deleted.`
        const ret = { state: state }
        return ret
    }
}

module.exports = Mutation 