export interface IPokemonDetails {
  pokemon_v2_move: {
    name: string;
    accuracy: number;
    move_effect_chance: number | null;
  }[];
  pokemon_v2_pokemonsprites: {
    id: number;
    pokemon_id: number;
    pokemon_v2_pokemon: { name: string };
  }[];
  pokemon_v2_pokemonstat: {
    base_stat: number;
    effort: number;
    id: number;
    pokemon_id: number;
  }[];
}
