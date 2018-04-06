const Api = require(`../models/Api.js`);
const CharacterFile = require("../models/CharacterFile");

/**
 * Class Home Controller
 */
class HomeController {
  /**
   * Page about
   * @param {*} req
   * @param {*} res
   */
  home(req, res) {
    if (CharacterFile.isEmpty()) {
      Api.getAll().then(data => CharacterFile.write(data));
    }
    res.send("Works !");
  }
}

module.exports = HomeController;
