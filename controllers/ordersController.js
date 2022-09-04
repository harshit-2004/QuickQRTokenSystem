const Order = require('../models/order');

module.exports.create = function(req,res){
    console.log(req);
    Order.create(req.body,function(err,order){
        console.log(req.body);
        if(err){
            console.log("Error in creating the order ID in database");
            console.log(err);
            return;
        }
        console.log(order);
        return res.redirect('dataPage');
    })
}