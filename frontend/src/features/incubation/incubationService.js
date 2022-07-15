import axios from 'axios'

const API_URL='/api/incubation/'

//create new goal

const createIncubation=async(Data,token)=>{
    const config={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }

    const response=await axios.post(API_URL,Data,config)

    return response.data
    
    
}

const getIncubeation=async(token)=>{
    const config={
        headers:{
            Authorization:`bearer ${token}`
        },
    }
}


const incubationService={
    createIncubation,
    
}

export default incubationService