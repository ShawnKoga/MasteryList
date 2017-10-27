module.exports = {
    getAllProducts: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.products.getAllProducts()
        .then(products => res.status(200).send(products))
        .catch(err => res.status(500).send())  
    },

    createProduct: (req, res) => {
        const dbInstance = req.app.get('db');
        const {productName, productDescription, imgs, price} = req.body
        dbInstance.products.createProduct()
        .then(product => res.status(200).send(productName, productDescription, imgs, price))
        .catch(err => res.status(500).send())
    },

    updateProduct: (req, res) => {
        const dbInstance = req.app.get('db');
        const {productName, productDescription, imgs, price} = req.body
        dbInstance.products.updateProduct((productName, productDescription, imgs, price))
    },

    deleteProduct: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.products.deleteProduct(req.params.id)
        .then(products => res.status(200).send(products))
        .catch(err => res.status(500).send())
    }
}