const itemController = require('../controller/user')

const routers = (app) => {
    app.route('/item')
    .get(itemController.getItem)
    .post(itemController.addItem)
    app.route('/item/:id')
    .delete(itemController.deleteItem)
    .put(itemController.updateItem)
    app.route('/item/paginate')
    .get(itemController.paginateItem)
    app.route('/item/search')
    .get(itemController.searchItem)
}

module.exports = routers