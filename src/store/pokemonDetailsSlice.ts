import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GraphQLClient } from "graphql-request";
import { JSONPlaceholder, query } from "../constants/api-constants";
import { IPokemonDetails } from "../interfaces/IPokemonDetails";
import { PokemonDetailsState } from "../types/pokemonDetailsSliceType";
import { FetchInfoError, IPokemon, ResponseType } from "../types/slicesType";
import axios from "axios";

const client = new GraphQLClient(JSONPlaceholder);

export const fetchMainInfo = createAsyncThunk<
  ResponseType,
  IPokemon,
  { rejectValue: FetchInfoError }
>("pokemons/fetchInfo", async (request: IPokemon, thunkApi) => {
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`
  );

  if (response.status !== 200) {
    return thunkApi.rejectWithValue({
      message: "Failed to fetch info.",
    });
  }

  const data = await response.data;

  return { data: data };
});

export const fetchDetailsInfo = createAsyncThunk<
  ResponseType,
  IPokemon,
  { rejectValue: FetchInfoError }
>("pokemons/fetchPokemonsDetails", async ({ limit, offset }) => {
  const variables = { limit, offset };
  const data: IPokemonDetails = await client.request(query, variables);

  return { data: data };
});

const initialState: PokemonDetailsState = {
  status: "idle",
  error: null,
  pokemonDetails: null,
  pokemonsCount: 0,
};

const pokemonDetailsSlice = createSlice({
  name: "pokemon-details",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchDetailsInfo.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(fetchDetailsInfo.fulfilled, (state, { payload }) => {
      state.pokemonDetails = {
        pokemon_v2_move: [...payload.data.pokemon_v2_move],
        pokemon_v2_pokemonsprites: [...payload.data.pokemon_v2_pokemonsprites],
        pokemon_v2_pokemonstat: [...payload.data.pokemon_v2_pokemonstat],
      };
      state.status = "idle";
    });

    builder.addCase(fetchDetailsInfo.rejected, (state, { payload }) => {
      if (payload) state.error = payload.message;
      state.status = "idle";
    });

    builder.addCase(fetchMainInfo.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(fetchMainInfo.fulfilled, (state, { payload }) => {
      state.pokemonsCount = payload.data.count;
      state.status = "idle";
    });

    builder.addCase(fetchMainInfo.rejected, (state, { payload }) => {
      if (payload) state.error = payload.message;
      state.status = "idle";
    });
  },
});

export default pokemonDetailsSlice.reducer;
