import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiLinks = {
  people: "https://swapi.dev/api/people",
  planets: "https://swapi.dev/api/planets",
  movies: "https://swapi.dev/api/films",
  vehicles: "https://swapi.dev/api/vehicles",
};

export const fetchData = createAsyncThunk(
  "data/fetchData",
  async (type, thunkAPI) =>{
    let nextLink = apiLinks[type];
    let totalData = [];
    while (nextLink){
      await fetch(nextLink).then(response=>response.json()).then(responseJSON=>{
        totalData = [...totalData, responseJSON];
        nextLink = responseJSON.next;
      });
    }
    return { type: type, data: totalData }; 
  }
);

export const dataSlice = createSlice({
  name: "dataRecolector",
  initialState: {
    people: null,
    vehicles: null,
    planets: null,
    movies: null,
  },
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => {
      action.payload && (state[action.payload.type] = action.payload.data);
    }
  }
});

export default dataSlice.reducer;
