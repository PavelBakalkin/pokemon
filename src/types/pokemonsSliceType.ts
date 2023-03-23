import { IPokemonMain } from "../interfaces/IPokemonMain";

export type FetchInfoError = {
  message: string;
};

export type PokemonsState = {
  status: "loading" | "idle";
  error: string | null;
  mainPageInfo: IPokemonMain | null
};

export type ResponseType = {
  data: any;
};

export type IPokemon = {
  pokemonId?: number;
};
