import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query';
import loginReducer from '../components/auth/LoginForm/LoginSlice'
import promptReducer from '../components/Profile/PromptSlice';
import { baseApi } from './baseAPI';

export function makeStore() {
  return configureStore({
    reducer: {
      [baseApi.reducerPath]: baseApi.reducer,
      loginSlice: loginReducer,
      promptSlice: promptReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(
        baseApi.middleware
      ),
  });
}

const store = makeStore()

setupListeners(store.dispatch);

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	AppState,
	unknown,
	Action<string>
>

export default store