import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { JSONPlaceholder } from "../constants/api-constants";
import { IPokemonMain } from "../interfaces/IPokemonMain";
import {
  FetchInfoError,
  IPokemon,
  PokemonsState,
  ResponseType,
} from "../types/pokemonsSliceType";

export const fetchMainInfo = createAsyncThunk<
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

const initialState: PokemonsState = {
  status: "idle",
  error: null,
  mainPageInfo: null,
};

const pokemonsSlice = createSlice({
  name: "pokemons",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchMainInfo.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });

    builder.addCase(fetchMainInfo.fulfilled, (state, { payload }) => {
      state.mainPageInfo = {
        count: payload.data.count,
        next: payload.data.next,
        previous: payload.data.previous,
        results: [...payload.data.results],
      };
      state.status = "idle";
    });

    builder.addCase(fetchMainInfo.rejected, (state, { payload }) => {
      if (payload) state.error = payload.message;
      state.status = "idle";
    });
  },
});

export default pokemonsSlice.reducer;
