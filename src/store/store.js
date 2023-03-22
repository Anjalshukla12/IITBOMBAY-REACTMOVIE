import { configureStore } from '@reduxjs/toolkit'
import homeslice from './homeslice'

export default configureStore({
 reducer : {home : homeslice}
})