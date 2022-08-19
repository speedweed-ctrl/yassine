import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import  Container  from '@mui/material/Container';
import Divider from '@mui/material/Divider';




const Filter2 = ({props}) => {
    const [spec,setSpec]=useState('')
    const [reg,setReg]=useState('')

    const handleChnage = event=>{
        setSpec(event.target.value)
    }
    const handleChnage2 = event=>{
        setReg(event.target.value)
    }
    const sp=[
        {
            value:'lorem',
            name:'Arian',

        },
        {
            value:'lorem',
            name:'sousse',
            
        },
        {
            value:'lorem',
            name:'La marsa',
            
        },
       
    ]
    const list= [
        { label: 'maison la coeur', id: 1 },
        
       
    ]

  return (
    <Container sx={{backgroundColor:'#F5F5F5',paddingTop:'1rem',marginTop:'2.5rem',borderRadius:'1rem' ,  marginBottom:'1.5rem'}}>
    <Grid container  spacing={5} alignItems='center'   >
        <Grid item >
        <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={list}
      sx={{ width: 300,paddingRight:'2.5rem',paddingLeft:'3rem' }}
      renderInput={(params) => <TextField {...params} label="search for a specialist" />}

    />
        
       </Grid>
       <Divider orientation="vertical" flexItem light />
       <Grid  item >
        <Grid container spacing={2}>
            <Grid item>
            <Box sx={{ minWidth: '12rem' }}>
                <FormControl fullWidth>
                    <InputLabel >type</InputLabel>
                    <Select
                    label="type"
                    value={spec}
                    onChange={handleChnage}
                    >
                        {sp.map((specs=>{
                            return(
                                <MenuItem value={specs.value}>{specs.value}</MenuItem>
                            )
                        }))}
                    </Select>
                </FormControl>
             </Box>
            </Grid>
            <Grid item>
            <Box sx={{ minWidth: '12rem' }}>
                <FormControl fullWidth>
                    <InputLabel >region</InputLabel>
                    <Select
                    label="region"
                    value={reg}
                    onChange={handleChnage2}
                    >
                        {sp.map((specs=>{
                            return(
                                <MenuItem value={specs.value}>{specs.name}</MenuItem>
                            )
                        }))}
                    </Select>
                </FormControl>
             </Box>
            </Grid>
        </Grid>
       
    
       </Grid>
       <Divider orientation="vertical" flexItem light />

       <Grid item>
        <Button variant="contained" sx={{height:'3.5rem' ,width:'10rem' , backgroundColor:'#217675',marginLeft:'3rem',"&:hover":{backgroundColor:'#F1A629'}}}>search</Button>
       </Grid>
    </Grid>
    </Container>
  )
}

export default Filter2