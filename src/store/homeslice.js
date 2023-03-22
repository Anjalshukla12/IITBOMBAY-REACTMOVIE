
import { createSlice } from '@reduxjs/toolkit'

export const HomeSlice = createSlice({
  name: 'home',
  initialState: {
    imgurl:{name :"chasu"},
    genres:{}
  },
  reducers: {
    getApiConfiguration  : (state,action) => {
      
      state.imgurl = action.payload
    },
    getGeneres  : (state,action) => {
      
        state.genres = action.payload
      },
    
  }
})

// Action creators are generated for each case reducer function
export const {   getApiConfiguration ,getGeneres} = HomeSlice.actions

export default HomeSlice.reducer