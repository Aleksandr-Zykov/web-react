import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../features/theme/themeSlice.js'
import employeesReducer from '../features/employees/employeesSlice.js'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    employees: employeesReducer,
  },
  devTools: {
    name: 'Web React Lab 13',
  },
})
