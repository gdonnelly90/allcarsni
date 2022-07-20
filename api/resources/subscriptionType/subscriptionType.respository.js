import { SubscriptionType } from "./subscriptionType.model.js"

const getSubscriptionByName = async (name) => {
    return await SubscriptionType.findOne({name}).exec();
}

export default {
    getSubscriptionByName
}
