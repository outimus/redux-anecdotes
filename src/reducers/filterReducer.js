import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
    name: 'filter',
    initialState: { 
      content: '' },
    reducers: {
        setFilter(state, action) {
          console.log('ACTION', action)
          state.content = action.payload
          return state
          }}
      }
    )

export const { setFilter } = filterSlice.actions
export default filterSlice.reducer