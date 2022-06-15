import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IData } from "../../models/IColor";
import { fetchColors } from "./ActionCreator";

interface ColorState {
  colors: IData[],
  isLoading: boolean,
  error: string,
  searchText: number | undefined,
}

const initialState: ColorState = {
  colors: [],
  isLoading: false,
  error: '',
  searchText: undefined,
}

export const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    search: (state, action) => {
      state.searchText = action.payload;
    }
  },
  extraReducers: {
    [fetchColors.fulfilled.type]: (state, action: PayloadAction<IData[]>) => {
      state.isLoading = false;
      state.error= '';
      state.colors = action.payload;
    },
    [fetchColors.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchColors.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
})

export default colorSlice.reducer;

export const { search } = colorSlice.actions;