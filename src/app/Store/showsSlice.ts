import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from '../../axiosAPI.ts';

interface Show {
  id: number;
  name: string;
}

interface ShowsState {
  items: Show[];
  loading: boolean;
  error: string | null;
}

const initialState: ShowsState = {
  items: [],
  loading: false,
  error: null,
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
    builder
      .addCase(fetchShows.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchShows.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.loading = false;
      })
      .addCase(fetchShows.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load shows.";
      });
  },
});

export const showsReducer = showsSlice.reducer;
