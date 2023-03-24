import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

function Display() {
    const [selectedUser, setSelectedUser] = useState(null);
    const arr = [
        {id:1, name: "Mayank", age: 23},
        {id:2, name: "Sumit", age: 24},
        {id:3, name: "Shivam", age: 25},
        {id:4, name: "Rakesh", age: 26},
        {id:5, name: "Ramesh", age: 27}
    ]

    const handleClick = (a) =>{
        console.log("Clicked");
        setSelectedUser(a);

    }

    
  return (
    <div>
        <h1 style={{textAlign:'center'}}>Click Event</h1>
      <Container style={{marginTop:'8%'}}>
      <Grid container spacing={2} >
      <Grid item xs={6} >
        <Box sx={{ bgcolor: '#cfe8fc', height: '50vh' }}
         style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
            <Grid>
            {arr.map((a)=>
        (
            <Grid  key={a.id} style={{paddingBottom:'8px'}}>
                <Button variant="contained" onClick={()=>handleClick(a)}>{a.name}</Button>
            </Grid>
            // console.log(arr);
        ))}
            </Grid>
       
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box sx={{ bgcolor: 'black', height: '50vh' }}
         style={{display: 'flex', justifyContent:'center', alignItems:'center', color:'white'}} >
            {/* <Data/> */}
            {selectedUser && (
                <div>
                    <h4>Id: {selectedUser.id}</h4>
                    <h4>Name: {selectedUser.name}</h4>
                    <h4>Age: {selectedUser.age}</h4>
                </div>
            )}
         </Box>
      </Grid>
      </Grid>
      </Container>
    </div>
  )
}

export default Display
