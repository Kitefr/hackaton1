const axios = require("axios");
const async = require("async");

class Api {
  constructor() {}

  /**
   * Get all Characters from the API.
   *
   * @returns {Promise}
   * @memberof Api
   */
  static getAll() {
    return axios
      .get(`https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json`)
      .then(res => res.data)
      .catch(err => console.log(err));
  }

  /**
   * Get a Character from the API by ID and add it to the characters.json file.
   *
   * @param {number} [id=1]
   * @returns {Promise}
   * @memberof Api
   */
  static getCharacter(id = 1) {
    return axios
      .get(
        `https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/${id}.json`
      )
      .then(res => res.data)
      .catch(err => console.log(err));
  }
}

module.exports = Api;
