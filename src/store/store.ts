import { combineReducers, configureStore } from "@reduxjs/toolkit";
import colorReducer from './reducers/ColorSlice';

const rootReducer = combineReducers({
  colorReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']