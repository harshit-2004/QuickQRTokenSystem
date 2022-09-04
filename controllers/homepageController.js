module.exports.home = function(req,res){
    var timer = new Date();
    var id = timer.getHours()+timer.getMinutes()+timer.getMilliseconds()+timer.getSeconds();
    return res.render('home',{
        title: "Welcome",
        orders_id: id
    });
}