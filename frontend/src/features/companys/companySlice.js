import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import companyServices from './companyService'

const initialState={
    companies:[],
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:''
}

export const getCompanies=createAsyncThunk(
'company/getAll',
async(_,thunkAPI)=>{
    try {
       //const token=thunkAPI.getState().auth.user.token
       return await companyServices.getCompany()
       
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

export const companySlice=createSlice({
    name:'company',
    initialState,
    reducers:{
        reset:(state)=>initialState
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getCompanies.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(getCompanies.fulfilled,(state,action)=>{
            state.isLoading=false
          state.isSuccess=true
          state.companies=action.payload 
        })
        .addCase(getCompanies.rejected,(state,action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload 
        })
    }
})

export const{reset}=companySlice.actions
export default companySlice.reducer