const axios = require("axios");
const jsonfile = require("jsonfile");

const charactersFile = "./characters.json";

class Api {
  constructor() {}

  /**
   * Get all Characters from the API.
   *
   * @returns {Promise}
   * @memberof Api
   */
  getAll() {
    return axios
      .get(`https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json`)
      .then(res => {})
      .catch(err => console.log(err));
  }

  /**
   * Get a Character from the API by ID and add it to the characters.json file.
   *
   * @param {number} [id=1]
   * @returns {Promise}
   * @memberof Api
   */
  getCharacter(id = 1) {
    return axios
      .get(
        `https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/${id}.json`
      )
      .then(res => {
        jsonfile.writeFileSync(
          charactersFile,
          res.data,
          { flag: "a", spaces: 2, EOL: "\r\n" },
          err => {
            console.error(err);
          }
        );
      })
      .catch(err => console.log(err));
  }

  /**
   * Reset the file of characters
   *
   * @memberof Api
   */
  resetCharactersFile() {
    jsonfile.writeFile(charactersFile, {}, err => {
      console.error(err);
    });
  }
}

module.exports = Api;
