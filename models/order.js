const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    order_ID: {
        type: Number,
        required: true
    },
    order_Item: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
    },
    estimated_Time: {
        type: Number,
        default: 10
    },
    order_completion: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true
})

const Order = mongoose.model('Order',orderSchema);
module.exports = Order;