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
    const player1 = Api.getCharacter(1).then(data => CharacterFile.write(data));
    const player2 = Api.getCharacter(2).then(data =>
      CharacterFile.update(data)
    );

    res.render("index");
  }
}

module.exports = HomeController;
