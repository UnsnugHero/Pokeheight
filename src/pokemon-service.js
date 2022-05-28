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
        const getIdxText = convertIndexToText(idxOffset);
        const pokemonName =
          pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
        return {
          ...pokemon,
          generation,
          id: idxOffset,
          text: `${getIdxText}. ${pokemonName}`,
        };
      });
    });
}

/**
 * Gets a single Pokemon by its id (its Pokedex index)
 * @param {number} id
 * @returns {Promise<Pokemon>}
 */
export function getPokemonById(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  return axios.get(url).then(({ data }) => {
    const { name, height, sprites } = data;
    const { front_default } = sprites;
    // height is in decimeters, convert to inches
    const convertedHeight = Math.trunc(height * 3.937);

    return {
      name,
      height: convertedHeight,
      sprite: front_default,
    };
  });
}

// HELPERS

/**
 * Converts a Pokemon's pokedex index to a three digit string value prepended with zeros when needed
 * @param {number} index
 */
function convertIndexToText(index) {
  let baseIdx = index.toString();
  let totalNumZeros = 3 - baseIdx.length;

  while (totalNumZeros > 0) {
    baseIdx = baseIdx.replace(/^/, '0');
    totalNumZeros--;
  }

  return baseIdx;
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
