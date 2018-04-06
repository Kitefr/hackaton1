const jsonfile = require("jsonfile");
const fs = require("fs");
const path = require("path");

/**
 * This class manage the characters.json file.
 * The file itself will always exists, only the data can change.
 *
 * @class CharacterFile
 */
class CharacterFile {
  constructor() {}

  /**
   * Get the filename.
   * Absolute Path.
   *
   * @readonly
   * @static
   * @memberof CharacterFile
   */
  static get filename() {
    return "../characters.json";
  }

  /**
   * This create the content of the file.
   * Delete all previous content.
   *
   * @static
   * @param {Object} - Data to write
   * @returns {Boolean}
   * @memberof CharacterFile
   */
  static write(obj) {
    jsonfile.writeFile(
      this.filename,
      [obj],
      { spaces: 2, EOL: "\r\n" },
      err => {
        console.log(err);
      }
    );
  }

  /**
   * This reads the file and return the content as JSON.
   *
   * @static
   * @returns {String}
   * @memberof CharacterFile
   */
  static read() {
    return jsonfile.readFile(this.filename, (err, obj) => {
      console.log(obj);
    });
  }

  /**
   * This appends data to the file content.
   *
   * @static
   * @param {Object}
   * @returns {Boolean}
   * @memberof CharacterFile
   */
  static update(obj) {
    jsonfile.readFile(this.filename, (err, data) => {
      data.push(obj);
      console.log(data);
      jsonfile.writeFile(
        this.filename,
        data,
        { spaces: 2, EOL: "\r\n" },
        err => {
          console.log(err);
        }
      );
    });
  }

  /**
   * Return if the file is empty or not based on the file size.
   *
   * @static
   * @returns {Boolean}
   * @memberof CharacterFile
   */
  static isEmpty() {
    const stats = fs.statSync(this.filename);
    const fileSizeInBytes = stats.size;
    const size = fileSizeInBytes / 1000.0;
    return size < 0.5 ? true : false;
  }
}

module.exports = CharacterFile;
