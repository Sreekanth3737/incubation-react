import { fabClasses } from '@mui/material'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import companyServices from './companyService'

const initialState={
    companies:[],
    isLoading:false,
    error:''
}

export const allApplication=createAsyncThunk(
'users/allApplication',()=>{
    return axios({
        method:'get',
        url:'/api/adminHome/allApps'
    }).then((res)=>{
        console.log(res+'resssssssssssssss');
        return res.data
    })
}
)

export const newApplication=createAsyncThunk('users/newApplication',()=>{
    return axios({
        method:'get',
        url:'/api/adminHome/newApplication'
    }).then((res)=>
        res.data)
   
})

export const pendingApplication=createAsyncThunk('users/pendingApplication',()=>{
    return axios({
        method:'get',
        url:'/api/adminHome/pendingApplication'
    }).then((res)=>{
        console.log(res.data+'pendingggggggggggg');
     return   res.data})
})

export const registeredApplication=createAsyncThunk('users/registeredApplication',()=>{
    return axios({
        method:'get',
        url:'/api/adminHome/registeredApplication'
    }).then((res)=>{
        
        return res.data
    })
})

export const blockedApplication=createAsyncThunk('users/blockedApplication',()=>{
    return axios({
        method:'get',
        url:'/api/adminHome/blockedApplication'
    }).then((res)=>{
        console.log(res.data);
        return res.data
    })
})

export const companySlice=createSlice({
    name:'companies',
    initialState,
    reducers:{
        reset:(state)=>initialState
    },


    extraReducers:(builder)=>{
        builder.addCase(newApplication.pending,(state,action)=>{
            state.isLoading=true
        })
        builder.addCase(newApplication.fulfilled,(state,action)=>{
            state.isLoading=false
            state.companies=action.payload
            state.error=''
        })
        builder.addCase(newApplication.rejected,(state,action)=>{
            state.isLoading=false
            state.companies=[]
            state.error=action.error.message
        })
        builder.addCase(pendingApplication.fulfilled,(state,action)=>{
            state.isLoading=false
            state.companies=action.payload
            state.error=''
           
        })
        builder.addCase(registeredApplication.fulfilled,(state,action)=>{
            state.isLoading=false
            state.companies=action.payload
            state.error=''
        })
        builder.addCase(blockedApplication.fulfilled,(state,action)=>{
            state.isLoading=false
            state.companies=action.payload
            state.error=''

        })
        builder.addCase(allApplication.fulfilled,(state,action)=>{
            state.isLoading=false
            state.companies=action.payload
            state.error=''
        })
    }
})

export default companySlice.reducer