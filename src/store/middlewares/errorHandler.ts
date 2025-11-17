import { type Middleware, isRejectedWithValue } from '@reduxjs/toolkit'
import { type RootState } from '../store'

interface ErrorPayload {
  message: string
  status?: number
  code?: string
}

export const errorHandlerMiddleware: Middleware<{}, RootState> = 
  (store) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      const error = action.payload as ErrorPayload
      
      // Log error to external service
      console.error('Redux Error:', {
        action: action.type,
        error: error,
        timestamp: new Date().toISOString()
      })

      // Show user-friendly error messages
      if (error.status === 404) {
        // Handle not found errors
        console.warn('Resource not found')
      } else if (error?.status && error?.status >= 500) {
        // Handle server errors
        console.error('Server error occurred')
      }
    }

    return next(action)
  }