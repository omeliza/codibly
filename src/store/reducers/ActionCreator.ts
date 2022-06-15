import axios from "axios";
import { IData } from "../../models/IColor";
// import { AppDispatch } from "../store";
// import { colorSlice } from "./ColorSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchColors = createAsyncThunk(
  'color/fetchAll',
  async(_, thunkAPI) => {
    try {
      const response = await axios.get('https://reqres.in/api/products');
      return response.data.data as IData[];
    } catch (error) {
      thunkAPI.rejectWithValue('Failed to load data')
    }
  }
);

// export const fetchColors = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(colorSlice.actions.colorsFetching())
//     const response = await axios.get<IColor[]>('https://reqres.in/api/products')
//     dispatch(colorSlice.actions.colorsFetchingSuccess(response.data))
//   } catch (e: any) {
//     dispatch(colorSlice.actions.colorsFetchingError(e.message))
//   }
// }
