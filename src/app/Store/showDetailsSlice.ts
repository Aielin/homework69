import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from '../../axiosAPI.ts';


interface ShowDetail {
  id: number;
  name: string;
  summary: string;
  image?: { medium: string };
}

interface ShowDetailsState {
  details: ShowDetail | null;
  loading: boolean;
}

const initialState: ShowDetailsState = {
  details: null,
  loading: false,
};


export const fetchShowDetails = createAsyncThunk<ShowDetail, number>(
  "showDetails/fetchShowDetails",
  async (showId) => {
    const response = await axiosApi.get(`/shows/${showId}`);
    return response.data;
  }
);

const showDetailsSlice = createSlice({
  name: "showDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchShowDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchShowDetails.fulfilled, (state, { payload }) => {
      state.details = payload;
      state.loading = false;
    });
    builder.addCase(fetchShowDetails.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const showDetailsReducer = showDetailsSlice.reducer;
