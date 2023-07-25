const express = require("express");
const  productsController = require('../controllers/productsController');

function routes(products) {
	const router = express.Router();
	const controller = productsController(products);

	router.route("/allproducts")
		.get(controller.get)

	router.route("/newproduct")
		.post(controller.post)

	router.use("/products/:id", (req, res, next) => {
		console.log("middleware..");
		products.findById(req.params.id)
			.then(function (prod) {
				console.log("found.." + prod);
				if (prod) {
					req.products = prod;
					return next();
				}
				return res.sendStatus(404);
			})
			.catch(function (err) {
				console.log('Error', err)
				return res.send(err);
			})
	});

	router.route("/products/:id")
		.get((req, res) => res.json(req.products))
		.put((req, res) => {
			const { products } = req;
			products.name = req.body[0].name;
			products.purchased = req.body[0].purchased;
			products.save().then(products => {
				console.log('Product has been updated!' + products);
			}).catch(err => {
				console.log(err);
			});
			return res.json(products);
		})
		.patch((req,res) => {
			const { products } = req;
			if (req.body._id){
				delete req.body._id;
				console.log("deleted the _id");
			}

			Object.entries(req.body[0]).forEach(item => {
				const key = item[0];
				const value = item[1];
				products[key] = value;
			});
			products.save().then(products => {
				console.log('Product has been updated!' + products);
			}).catch(err => {
				console.log(err);
			});
			return res.json(products);
		})
		.delete((req,res) => {
			const { products } = req;
			products.deleteOne().then(() => {
				console.log('Product removed from MongoDB!');
				return res.status(202).send('Product removed from the collection');
			  }).catch(err => {
				console.log(err);
				return res.sendStatus(500);
			  });
			
		});
	return router;
}

module.exports = routes; 