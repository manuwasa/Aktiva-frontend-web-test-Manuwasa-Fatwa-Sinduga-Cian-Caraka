import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Action
export const fetchTenders = createAsyncThunk("fetchTenders", async () => {
   const response = await fetch("https://tenders.guru/api/es/tenders");
   return response.json();
});

const tenderSlice = createSlice({
   name: "tender",
   initialState: {
      isLoading: false,
      data: null,
      isError: false,
   },
   extraReducers: (builder) => {
      builder.addCase(fetchTenders.pending, (state, action) => {
         state.isLoading = true;
      });
      builder.addCase(fetchTenders.fulfilled, (state, action) => {
         state.isLoading = false;
         state.data = action.payload;
      });
      builder.addCase(fetchTenders.rejected, (state, action) => {
         console.log("Error", action.payload);
         state.isError = true;
      });
   },
});

export default tenderSlice.reducer;
