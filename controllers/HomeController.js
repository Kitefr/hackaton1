const Api = require(`../models/Api.js`);

/**
 * Class Home Controller
 */
class HomeController {
  /**
   * Page about
   * @param {*} req
   * @param {*} res
   */
  index(req, res) {
    const api = new Api();
    api.getCharacter(1);
    res.render("index");
  }
}

module.exports = HomeController;
