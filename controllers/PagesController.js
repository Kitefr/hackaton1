// const db = require(`../models/index.js`);
/**
 * Class Pages Controller
 */
class PagesController {
  /**
   * Page about
   * @param {*} req
   * @param {*} res
   */
  about(req, res) {
    res.render("pages/about");
  }

  /**
   * Page concept
   * @param {*} req
   * @param {*} res
   */
  concept(req, res) {
    res.render("pages/concept");
  }

  /**
   * Page contact
   * @param {*} req
   * @param {*} res
   */
  contact(req, res) {
    res.render("pages/contact");
  }
}

module.exports = PagesController;
