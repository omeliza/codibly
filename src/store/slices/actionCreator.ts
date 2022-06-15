import axios from "axios";
import { IData } from "../../models/IColor";
import { createAsyncThunk } from "@reduxjs/toolkit";

const url = process.env.REACT_APP_SERVER_URL as string;

export const fetchColors = createAsyncThunk(
  'color/fetchAll',
  async(_, thunkAPI) => {
    try {
      const response = await axios.get(url);
      return response.data.data as IData[];
    } catch (error) {
      thunkAPI.rejectWithValue('Failed to load data')
    }
  }
);
