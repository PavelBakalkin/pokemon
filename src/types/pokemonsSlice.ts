import { IPokemonMain } from "../interfaces/IPokemonMain";
import { GenericFetchType } from "./slicesType";

export type PokemonsState = GenericFetchType & {
  mainPageInfo: IPokemonMain | null;
};
