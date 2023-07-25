const productsController = (products) => {


    const post = (req, res) => {
        const newProduct = new products(req.body[0]);
        console.log(req.body[0]);
        if (!req.body[0].name){
            res.status(400);
            return res.send("Name is required");
        }
        newProduct.save().then(newProduct => {
            console.log('Product has been saved to MongoDB!' + newProduct);
            res.status(201)
            return res.json(newProduct);
        }).catch(err => {
            console.log(err);
        });
    }

    const get = (req, res) => {
        const { query } = req;
        products.find(query)
            .then(function (prods) {
                console.log(`found ${prods.length === 0 ? 'nothing' : prods}`);
                return res.json(prods);
            })
            .catch(function (err) {
                return res.send(err);
            })
    }

    return { post, get, simple };

}

module.exports = productsController;


