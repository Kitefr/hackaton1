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
  /* page concept */
  concept(req, res) {
    res.render("pages/concept");
  }
  contact(req, res) {
    res.render("pages/contact");
  }
}

module.exports = PagesController;
