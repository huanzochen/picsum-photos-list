import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { createEntityAdapter } from '@reduxjs/toolkit'

const imagesAdapter = createEntityAdapter()

const initialState = imagesAdapter.getInitialState({
    imagesStatus: 'idle',
    page: '0',
    error: null
})

export const fetchImages = createAsyncThunk('images/fetchImages', async(page = 1) => {
    const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=10`, {
        method: 'GET'
    })
    return await response.json()
})

const imagesSlice = createSlice({
    name:'images',
    initialState,
    reducers:{
        nextPage: (state) => {
            state.page++
        }
    },
    extraReducers:{
        [fetchImages.pending]:(state, action) => {
            state.imagesStatus = 'loading'
        },
        [fetchImages.fulfilled]:(state, action) => {
            state.imagesStatus = 'succeeded'
            imagesAdapter.upsertMany(state, action.payload)
        },
        [fetchImages.rejected]:(state, action) => {
            state.imagesStatus = 'failed'
            state.error = action.error.message
        }, 
    }
})

export const {nextPage} = imagesSlice.actions

export default imagesSlice.reducer

export const { 
    selectAll,
    selectIds,
    selectById
} = imagesAdapter.getSelectors(state => state.images)



