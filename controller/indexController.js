const productsDB = require('../data/datos');

module.exports = {
    index: (req, res) => {
        /* renderizar la views */
        let inSale = productsDB.filter(producto => {
            return producto.category == 'in-sale'
        });
        let visited = productsDB.filter(producto => {
            return producto.category == 'visited'
        })
        res.render('index', {
            title: 'Home-page',
            productsInSale: inSale,
            productsVisited: visited
        });
    }
}