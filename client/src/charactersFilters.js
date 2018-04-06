import characters from "./assets/characters.json";
import sampleSize from "lodash/sampleSize";

class CharactersFilters {
  constructor(num = 20, all = characters) {
    this.numberCharacters = num;
    this.all = characters;
    this.filtered = [];
    this.randomize = [];
    this.types = [
      "Bizarro",
      "Mutant",
      "New God",
      "Cyborg",
      "Alien",
      "Vampire",
      "Human"
    ];
  }

  /**
   * Get a list of characters by race.
   *
   * @param {string} [type="Human"]
   * @returns {Array}
   * @memberof CharactersFilters
   */
  getCharactersBy(type = "Human") {
    return this.all.filter(character => {
      return character.appearance.race !== null
        ? character.appearance.race.includes(type)
        : null;
    });
  }

  /**
   * Get a list of characters by a list of races.
   *
   * @param {Array} [types=this.types]
   * @returns {Array}
   * @memberof CharactersFilters
   */
  getCharactersFrom(types = this.types) {
    const tables = [];

    for (const type of types) {
      const temp = this.getCharactersBy(type);
      if (temp.length < 5) {
        tables.push(...temp);
      } else {
        tables.push(...this.sample(temp, 4));
      }
    }

    return this.sample(tables, 20);
  }

  /**
   *
   *
   * @param {Array} arr
   * @memberof CharactersFilters
   */
  sample(arr, size = 20) {
    return sampleSize(arr, size);
  }
}

export default CharactersFilters;
