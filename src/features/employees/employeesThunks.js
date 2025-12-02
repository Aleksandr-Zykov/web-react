import { createAsyncThunk } from '@reduxjs/toolkit'

const ENDPOINT = 'https://jsonplaceholder.typicode.com/users'

export const fetchEmployees = createAsyncThunk('employees/fetchEmployees', async (_, thunkAPI) => {
  try {
    const response = await fetch(ENDPOINT)

    if (!response.ok) {
      return thunkAPI.rejectWithValue(`HTTP ${response.status}`)
    }

    const contentType = response.headers.get('content-type') || ''
    if (!contentType.includes('application/json')) {
      return thunkAPI.rejectWithValue('Unexpected content-type')
    }

    const data = await response.json()
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message || 'Request failed')
  }
})
