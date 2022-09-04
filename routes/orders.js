const express = require('express');
const router = express.Router();
const Order = require('../models/order');

const ordersController = require('../controllers/ordersController');
const statusController = require('../controllers/statusController');

router.post('/create',ordersController.create);
router.get('/dataPage',statusController.data);
router.get('/:order_ID',function(req,res){
    var a = req.params['order_ID'];
    Order.findOne({order_ID:a},function(err,order){
        if(err){
            console.log(err);
            return;
        }
        if(!order){
            console.log("Order Not Found");
            return;
        }
        return res.render('userView',{
            ID: order.order_ID,
            order:order
        })
    })
})

router.get('/modify/:id',function(req,res){
    var b = req.params['id'];
    console.log(b);
    Order.findOneAndUpdate({order_ID:b},{order_completion:true},null,function(err,order){
        if(err){
            console.log(err);
            return;
        }
        if(!order){
            console.log("Order not found");
            return;
        }
        console.log("Updated");
        return res.redirect('back');
    })
})

module.exports = router;