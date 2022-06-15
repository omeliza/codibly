import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { colorAPI } from "../services/DataService";
import colorReducer from './reducers/ColorSlice';

const rootReducer = combineReducers({
  colorReducer,
  // [colorAPI.reducerPath]: colorAPI.reducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) =>
    //   getDefaultMiddleware().concat(colorAPI.middleware)
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']