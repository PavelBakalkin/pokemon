import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import pokemonDetailsSlice from "./pokemonDetailsSlice";
import pokemonsSlice from "./pokemonsSlice";

export const store = configureStore({
  reducer: {
    pokemons: pokemonsSlice,
    pokemonDetails: pokemonDetailsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
