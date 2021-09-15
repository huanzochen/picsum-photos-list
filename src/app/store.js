import { configureStore } from '@reduxjs/toolkit'
import imagesReducer from '../components/ImagesOverview/imagesSlice'

export const store = configureStore({
    reducer: {
        images: imagesReducer
    }
})
  