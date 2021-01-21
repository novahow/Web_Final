const Subscription = {
    user: {
        subscribe(parent, args, { pubsub }, info) {
            return pubsub.asyncIterator(`user`)
        }
    },
    loginUser: {
        subscribe(parent, args, { pubsub }, info) {
            return pubsub.asyncIterator(`loginUser`)
        }
    }
}
module.exports = Subscription