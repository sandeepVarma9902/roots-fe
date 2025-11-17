import { configureStore, type Middleware } from '@reduxjs/toolkit'
import { errorHandlerMiddleware } from './middlewares/errorHandler'

const rootReducer = {}

// Custom middleware array
const customMiddleware: Middleware[] = [
    errorHandlerMiddleware
]

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(customMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch