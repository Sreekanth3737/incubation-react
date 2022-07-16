import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import incubationService from './incubationService'

const initialState={
    forms:[],
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:''

}

//create incubation
export const createIncubation=createAsyncThunk('incube/create',
async(incubeData,thunkAPI)=>{
  try {
    const token=thunkAPI.getState().auth.user.token
    return await incubationService.createIncubation(incubeData,token)
  } catch (error) {
    const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
  }
})

export const getIncubation=createAsyncThunk(
  'incube/getAll',
  async(_,thunkAPI)=>{
    try {
      const token =thunkAPI.getState().auth.user.token
      return await incubationService.getIncubeation(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)


export const incubationSlice=createSlice({
    name:'incub',
    initialState,
    reducers:{
      reset:(state)=>initialState
    },
    extraReducers: (builder) => {
      builder
        .addCase(createIncubation.pending, (state) => {
          state.isLoading = true
        })
        .addCase(createIncubation.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.forms.push(action.payload)
        })
        .addCase(createIncubation.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        .addCase(getIncubation.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(getIncubation.fulfilled,(state,action)=>{
          state.isLoading=false
          state.isSuccess=true
          state.forms=action.payload
        })
        .addCase(getIncubation.rejected,(state,action)=>{
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        
    },


})

export const{reset}=incubationSlice.actions
export default incubationSlice.reducer