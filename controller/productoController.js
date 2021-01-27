const productsDB = require('../data/data');

module.exports={
    detail:(req,res)=>{
     let producto = productsDB.find(producto=>{
         return producto.id === Number(req.params.id) && producto.category === (req.params.category)
     })
     res.render('productDetail', {
         title: "Detalle de producto",
        producto

     })
    },
}