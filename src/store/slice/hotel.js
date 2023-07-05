import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const options = {
   method: "GET",
   headers: {
      "X-RapidAPI-Key": "0254d20963mshf4ad165e429ab8bp129d08jsn3427cba45776",
      "X-RapidAPI-Host": "hotels-com-provider.p.rapidapi.com",
   },
};

// Action
export const fetchHotels = createAsyncThunk("fetchHotels", async () => {
   const response = await fetch("https://hotels-com-provider.p.rapidapi.com/v2/domains", options);
   return response.json();
});

const hotelSlice = createSlice({
   name: "hotel",
   initialState: {
      isLoading: false,
      data: null,
      isError: false,
   },
   extraReducers: (builder) => {
      builder.addCase(fetchHotels.pending, (state, action) => {
         state.isLoading = true;
      });
      builder.addCase(fetchHotels.fulfilled, (state, action) => {
         state.isLoading = false;
         state.data = action.payload;
      });
      builder.addCase(fetchHotels.rejected, (state, action) => {
         console.log("Error", action.payload);
         state.isError = true;
      });
   },
});

export default hotelSlice.reducer;
