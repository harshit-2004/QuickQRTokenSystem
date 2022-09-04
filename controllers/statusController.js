const Order = require('../models/order');

module.exports.data = function(req,res){
    Order.find({order_completion:false},function(err,order){
        if(err){
            console.log(err);
        }
        else{
            return res.render('dataPage',{
                ordersn:order
            });
        }
    })
}
