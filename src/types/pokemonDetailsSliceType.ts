import { IPokemonDetails } from "../interfaces/IPokemonDetails";
import { GenericFetchType } from "./slicesType";

export type PokemonDetailsState = GenericFetchType & {
  pokemonDetails: IPokemonDetails | null;
};
