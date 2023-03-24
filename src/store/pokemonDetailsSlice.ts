import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { JSONPlaceholder } from "../constants/api-constants";
import { IPokemonMain } from "../interfaces/IPokemonMain";
import { PokemonDetailsState } from "../types/pokemonDetailsSliceType";
import { FetchInfoError, IPokemon, ResponseType } from "../types/slicesType";

export const fetchDetailsInfo = createAsyncThunk<
  ResponseType,
  IPokemon,
  { rejectValue: FetchInfoError }
>("pokemons/fetchInfo", async (request: IPokemon, thunkApi) => {
  const response = await axios.get(`${JSONPlaceholder}`);

  if (response.status !== 200) {
    return thunkApi.rejectWithValue({
      message: "Failed to fetch info.",
    });
  }

  const data: IPokemonMain = await response.data;

  console.log(data);

  return { data: data };
});

const initialState: PokemonDetailsState = {
  status: "idle",
  error: null,
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
      //   state.mainPageInfo = {
      //     count: payload.data.count,
      //     next: payload.data.next,
      //     previous: payload.data.previous,
      //     results: [...payload.data.results],
      //   };
      state.status = "idle";
    });

    builder.addCase(fetchDetailsInfo.rejected, (state, { payload }) => {
      if (payload) state.error = payload.message;
      state.status = "idle";
    });
  },
});

export default pokemonDetailsSlice.reducer;
