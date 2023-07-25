const should = require("should");
const sinon = require("sinon");
const productsController = require('../controllers/productsController');

    describe('Post', () => {
        it('should not allow an empty name on post', () => {
            const Products = function(product) { this.save = () => {};
            const req = {
                body: {
                    purchased: false
                }
            }
            const res = {
                status: sinon.spy(),
                send: sinon.spy(),
                json: sinon.spy()
            };

            const controller = productsController(Products);
            controller.post(req, res);

            res.status.calledWith(400).should.equal(false, `Bad Status ${res.status.args[0][0]}`);
            res.send.calledWith('Product name is required').should.equal(true);
            res.send.called.should.equal("hello");
            
        }
        });
    })
})