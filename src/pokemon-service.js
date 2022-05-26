import axios from 'axios';
import { get } from 'lodash';

export const GENERATION_ONE_RANGE = [1, 151];
export const GENERATION_TWO_RANGE = [152, 251];
export const GENERATION_THREE_RANGE = [252, 386];
export const GENERATION_FOUR_RANGE = [387, 493];
export const SUPPORTED_RANGE = [1, 493];

/**
 * Gets all Pokemon by this application
 * @returns {Promise<Object>} Promise for list of Pokemon
 */
export function getAllSupportedPokemon() {
  const url = 'https://pokeapi.co/api/v2/pokemon';
  return axios
    .get(url, {
      params: { limit: SUPPORTED_RANGE[1] },
    })
    .then((res) => {
      const results = get(res, ['data', 'results'], []);
      return results.map((pokemon, idx) => {
        const idxOffset = idx + 1;
        const generation = getGeneration(idxOffset);
        return {
          ...pokemon,
          generation,
        };
      });
    });
}

/**
 * Checks if value is within inclusive range or not
 * @param {number} value
 * @param {number} lower
 * @param {number} upper
 * @returns {boolean}
 */
function between(value, lower, upper) {
  return value >= lower && value <= upper;
}

/**
 * Gets generation based on index in response from PokeAPI
 * @param {number} pokeIndex
 */
function getGeneration(pokeIndex) {
  let generation = 1;
  if (between(pokeIndex, GENERATION_ONE_RANGE[0], GENERATION_ONE_RANGE[1])) {
    generation = 1;
  } else if (
    between(pokeIndex, GENERATION_TWO_RANGE[0], GENERATION_TWO_RANGE[1])
  ) {
    generation = 2;
  } else if (
    between(pokeIndex, GENERATION_THREE_RANGE[0], GENERATION_THREE_RANGE[1])
  ) {
    generation = 3;
  } else {
    generation = 4;
  }

  return generation;
}

/**
 * Gets all Pokemon in provided range (inclusive) by their
 * Pokedex index
 * @param {number} lowerIndex
 * @param {number} upperIndex
 * @returns {Promise<Pokemon[]>} Promise for list of Pokemon
 */
export function getPokemonInRange(lowerIndex, upperIndex) {}

/**
 * Gets a single Pokemon by its id (its Pokedex index)
 * @param {number} id
 * @returns {Promise<Pokemon>}
 */
export function getPokemonById(id) {}

/**
 * Gets a single Pokemon by its name
 * @param {string} name
 */
export function getPokemonByName(name) {}
