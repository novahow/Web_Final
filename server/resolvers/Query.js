const Query = {
    users(parent, args, { User }, info) {
        //console.log(args)
        if (!args.query.department) {
            return User.find({})
        }
        else {
            return User.find({ department: args.query.department })
        }
    },
    loginUsers(parent, args, { LoginUser }, info) {
        if (!args.query.name || !args.query.passwd) {
            return LoginUser.find({})
        }
        return LoginUser.find({ name: args.query.name, passwd: args.query.passwd })
    }
}

module.exports = Query