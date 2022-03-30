import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query';
import loginReducer from '../components/auth/LoginForm/LoginSlice'
import { postsApi } from '../components/feed/Posts/PostsApi'

export function makeStore() {
	return configureStore({
    reducer: {
      loginSlice: loginReducer,
      [postsApi.reducerPath]: postsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(postsApi.middleware),
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