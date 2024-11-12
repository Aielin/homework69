import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from '../../axiosAPI.ts';

interface Show {
  id: number;
  name: string;
}

interface ShowsState {
  items: Show[];
  loading: boolean;
}

const initialState: ShowsState = {
  items: [],
  loading: false,
};

export const fetchShows = createAsyncThunk<Show[], string>(
  "shows/fetchShows",
  async (query) => {
    const response = await axiosApi.get(`/search/shows?q=${query}`);
    return response.data.map((item: { show: Show }) => item.show);
  }
);

const showsSlice = createSlice({
  name: "shows",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchShows.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchShows.fulfilled, (state, { payload }) => {
      state.items = payload;
      state.loading = false;
    });
    builder.addCase(fetchShows.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const showsReducer = showsSlice.reducer;
