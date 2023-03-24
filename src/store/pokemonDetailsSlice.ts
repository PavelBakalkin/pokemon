import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { JSONPlaceholder } from "../constants/api-constants";
import { PokemonDetailsState } from "../types/pokemonDetailsSliceType";
import { FetchInfoError, IPokemon, ResponseType } from "../types/slicesType";

export const fetchDetailsInfo = createAsyncThunk<
  ResponseType,
  IPokemon,
  { rejectValue: FetchInfoError }
>("pokemons/fetchInfo", async (request: IPokemon, thunkApi) => {
  const response = await axios.get(
    `${JSONPlaceholder}${request.pokemonName}?fields=moves,sprites,stats`
  );

  if (response.status !== 200) {
    return thunkApi.rejectWithValue({
      message: "Failed to fetch info.",
    });
  }

  const data: PokemonDetailsState = await response.data;

  console.log(data);

  return { data: data };
});

const initialState: PokemonDetailsState = {
  status: "idle",
  error: null,
  pokemonDetails: null,
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
      // state.pokemonDetails = {
      //   moves: [...payload.data.moves],
      //   sprites: [...payload.data.sprites],
      //   stats: [payload.data.stats],
      // };
      state.status = "idle";
    });

    builder.addCase(fetchDetailsInfo.rejected, (state, { payload }) => {
      if (payload) state.error = payload.message;
      state.status = "idle";
    });
  },
});

export default pokemonDetailsSlice.reducer;
