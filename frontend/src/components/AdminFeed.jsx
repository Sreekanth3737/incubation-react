import { Box } from '@mui/system'
import Stack from '@mui/material/Stack';
import React from 'react'
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import {useSelector,useDispatch} from 'react-redux' 
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import AdminSideBar from './AdminSideBar';
import AdminRightBar from './AdminRightBar';
//import {newApplication,blockedApplication,pendingApplication,registeredApplication} from '../../Constants/ReduxSlice'
import companySlice from '../features/companys/companySlice';


function AdminFeed(props) {

  const users = useSelector((state)=>state.company)

  const [state,setState] = useState([])
  const [userStatus,setUserStatus] = useState('')
  const [sample,setSample] = useState(false)
  useEffect(()=>{
    axios({
      method:'get',
      url:'/api/incubation/'
    })
    .then((res)=>setState(res.data))
  },[sample])

//   const handleChange =(id,value)=>{
//     axios({
//       method:'post',
//       url:'/changingStatus',
//       data:{
//         id,
//         value
//       }
//     })
//     .then(()=>setSample(true))
//   }
 
  
  return (
    <div>
      <Stack spacing={2} direction='row' justifyContent='space-between'>
        <AdminSideBar/>
       <Box flex={4} p={2} >

       <Paper elevation={10} sx={{ overflow: 'auto' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
             
              <TableCell>No</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>CreatedAt</TableCell>
              <TableCell>CompanyName</TableCell>


            </TableRow>
          </TableHead>
       {
        users &&
        users.length >0 ?
        <TableBody>
            {users
              .map((row,i) => {
                return (
                  <TableRow hover role="checkbox" key={row._id}>
                        <TableCell >
                          {i+1}
                        </TableCell>
                        <TableCell >
                          {row.email}
                        </TableCell>
                        <TableCell >
                          {row.status}
                        </TableCell>
                        <TableCell >
                          {row.createdAt}
                        </TableCell>
                        <TableCell >
                          {row.companyName}
                        </TableCell>
                  
                  </TableRow>
                );
              })}
          </TableBody>
          :
          <TableBody>
            {state
              .map((row,i) => {
                return (
                  <TableRow hover role="checkbox" key={row._id}>
                        <TableCell >
                          {i+1}
                        </TableCell>
                        <TableCell >
                          {row.email}
                        </TableCell>
                        <TableCell >
                          {row.status}
                        </TableCell>
                        <TableCell >
                          {row.createdAt}
                        </TableCell>
                        <TableCell >
                          {row.company}
                        </TableCell>
                       {/* {
                        row.status !=='Registered' && row.status !=='Blocked' &&
                        <TableCell >
                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                 <InputLabel id="demo-simple-select-label">status</InputLabel>
                                 <Select
                                   labelId="demo-simple-select-label"
                                   id="demo-simple-select"
                                   value={userStatus}
                                   onChange={(e)=>{handleChange(row._id,e.target.value)}}
                                 >
                                    <MenuItem value={1}>APPROVE</MenuItem>
                                   <MenuItem value={2}>DENY</MenuItem>
                                  
                                 </Select>
                               </FormControl>
                         </TableCell> 
                       } */}
                  
                  </TableRow>
                );
              })}
          </TableBody>
          }
        </Table>
      </TableContainer>
      
    </Paper>

       </Box>
       <AdminRightBar/>
       </Stack>
  
    </div>
  )
}

export default AdminFeed