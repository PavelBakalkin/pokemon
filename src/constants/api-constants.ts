import { gql } from "graphql-request";

export const JSONPlaceholder = "https://beta.pokeapi.co/graphql/v1beta";

export const query = gql`
  query MyQuery($limit: Int = 10, $offset: Int = 0) {
    pokemon_v2_pokemonsprites(limit: $limit, offset: $offset) {
      pokemon_v2_pokemon {
        name
      }
      id
      pokemon_id
    }
    pokemon_v2_move(limit: $limit, offset: $offset) {
      name
      accuracy
      move_effect_chance
    }
    pokemon_v2_pokemonstat(limit: $limit, offset: $offset) {
      base_stat
      effort
    }
  }
`;
