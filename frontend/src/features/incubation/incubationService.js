import axios from 'axios'


const API_URL='/api/incubation/'

//create new incubation

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
            Authorization:`Bearer ${token}`
        },
    }

    const response=await axios.get(API_URL ,config)
    console.log(response+'------------------');
    return response.data
}


const incubationService={
    createIncubation,getIncubeation,
    
}

export default incubationService