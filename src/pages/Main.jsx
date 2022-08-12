import React from 'react'
import  Grid  from '@mui/material/Grid'
import Opener from '../components/Opener'
import Typography from '@mui/material/Typography';
import a from '../components/2.jpg'
import b from '../components/3.jpg'
import c from '../components/4.jpg'
import d from '../components/5.jpg'
const Main = () => {
  return (
    <Grid container direction='column' spacing={1} sx={{position:'relative',bottom:'10rem',zIndex:'-1'}}>
      <Grid item sx={{paddingBottom:'-5rem'}} >
        <Opener/>
      </Grid>
      <Grid item>
        <Grid container sx={{width:'100%'}}   >
          <Grid item sx={{backgroundColor:'#63DF92',width:'70%',height:'25rem' , paddingLeft:'1.5rem'}}>
          <Typography variant="h3" gutterBottom component="div" color='white' sx={{paddingTop:'2rem'}} >
            Who are we

            </Typography><br></br><br></br>
            <Typography variant="subtitle1" gutterBottom component="div" color='white'>
            Esse et veniam est duis nisi officia voluptate id aliquip. Nisi eu nulla ullamco velit laborum incididunt enim amet id. Veniam labore duis aute eiusmod.

            Ullamco ut elit aute labore quis Lorem proident pariatur sunt anim. Aliqua dolor qui sint est est elit voluptate. Ut commodo ut qui proident esse cupidatat tempor nisi eiusmod aliqua pariatur. Nostrud occaecat aliquip ipsum id officia ex deserunt culpa adipisicing nulla duis eu in. Minim mollit pariatur nostrud sit nisi dolore.

            Incididunt minim aliqua elit labore incididunt ex ullamco nisi esse. Veniam labore cillum Lorem amet id duis consectetur cillum aliquip. Sunt dolore nulla occaecat tempor aute ex aliqua qui consectetur labore est sint ut ad. Nostrud nulla non duis quis minim veniam irure reprehenderit enim labore qui labore.
            </Typography>
          </Grid>
          <Grid item sx={{width:'30%',height:'25rem'}}>
              <img src={a} style={{height:'100%',width:'100%'}}></img>
          </Grid>
      </Grid>
      </Grid>
      <Grid item>
      <Grid container sx={{width:'100%'}} direction='row-reverse'  >
          <Grid item sx={{backgroundColor:'#1ebbd7',width:'70%',height:'25rem' , paddingLeft:'1.5rem'}}>
          <Typography variant="h3" gutterBottom component="div" color='white' sx={{paddingTop:'2rem'}} >
            Our Mission

            </Typography><br></br><br></br>
            <Typography variant="subtitle1" gutterBottom component="div" color='white'>
            Esse et veniam est duis nisi officia voluptate id aliquip. Nisi eu nulla ullamco velit laborum incididunt enim amet id. Veniam labore duis aute eiusmod.

            Ullamco ut elit aute labore quis Lorem proident pariatur sunt anim. Aliqua dolor qui sint est est elit voluptate. Ut commodo ut qui proident esse cupidatat tempor nisi eiusmod aliqua pariatur. Nostrud occaecat aliquip ipsum id officia ex deserunt culpa adipisicing nulla duis eu in. Minim mollit pariatur nostrud sit nisi dolore.

            Incididunt minim aliqua elit labore incididunt ex ullamco nisi esse. Veniam labore cillum Lorem amet id duis consectetur cillum aliquip. Sunt dolore nulla occaecat tempor aute ex aliqua qui consectetur labore est sint ut ad. Nostrud nulla non duis quis minim veniam irure reprehenderit enim labore qui labore.
            </Typography>
          </Grid>
          <Grid item sx={{width:'30%',height:'25rem'}}>
              <img src={b} style={{height:'100%',width:'100%'}}></img>
          </Grid>
      </Grid>
      </Grid>
      <Grid item>
        <Grid container sx={{width:'100%'}}   >
          <Grid item sx={{backgroundColor:'#63DF92',width:'70%',height:'25rem' , paddingLeft:'1.5rem'}}>
          <Typography variant="h3" gutterBottom component="div" color='white' sx={{paddingTop:'2rem'}} >
            Our goals

            </Typography><br></br><br></br>
            <Typography variant="subtitle1" gutterBottom component="div" color='white'>
            Esse et veniam est duis nisi officia voluptate id aliquip. Nisi eu nulla ullamco velit laborum incididunt enim amet id. Veniam labore duis aute eiusmod.

            Ullamco ut elit aute labore quis Lorem proident pariatur sunt anim. Aliqua dolor qui sint est est elit voluptate. Ut commodo ut qui proident esse cupidatat tempor nisi eiusmod aliqua pariatur. Nostrud occaecat aliquip ipsum id officia ex deserunt culpa adipisicing nulla duis eu in. Minim mollit pariatur nostrud sit nisi dolore.

            Incididunt minim aliqua elit labore incididunt ex ullamco nisi esse. Veniam labore cillum Lorem amet id duis consectetur cillum aliquip. Sunt dolore nulla occaecat tempor aute ex aliqua qui consectetur labore est sint ut ad. Nostrud nulla non duis quis minim veniam irure reprehenderit enim labore qui labore.
            </Typography>
          </Grid>
          <Grid item sx={{width:'30%',height:'25rem'}}>
              <img src={c} style={{height:'100%',width:'100%'}}></img>
          </Grid>
      </Grid>
      </Grid>
      <Grid item>
      <Grid container sx={{width:'100%'}} direction='row-reverse'  >
          <Grid item sx={{backgroundColor:'#1ebbd7',width:'70%',height:'25rem' , paddingLeft:'1.5rem'}}>
          <Typography variant="h3" gutterBottom component="div" color='white' sx={{paddingTop:'2rem'}} >
              A word from our partners
            </Typography><br></br><br></br>
            <Typography variant="subtitle1" gutterBottom component="div" color='white'>
            Esse et veniam est duis nisi officia voluptate id aliquip. Nisi eu nulla ullamco velit laborum incididunt enim amet id. Veniam labore duis aute eiusmod.

            Ullamco ut elit aute labore quis Lorem proident pariatur sunt anim. Aliqua dolor qui sint est est elit voluptate. Ut commodo ut qui proident esse cupidatat tempor nisi eiusmod aliqua pariatur. Nostrud occaecat aliquip ipsum id officia ex deserunt culpa adipisicing nulla duis eu in. Minim mollit pariatur nostrud sit nisi dolore.

            Incididunt minim aliqua elit labore incididunt ex ullamco nisi esse. Veniam labore cillum Lorem amet id duis consectetur cillum aliquip. Sunt dolore nulla occaecat tempor aute ex aliqua qui consectetur labore est sint ut ad. Nostrud nulla non duis quis minim veniam irure reprehenderit enim labore qui labore.
            </Typography>
          </Grid>
          <Grid item sx={{width:'30%',height:'25rem'}}>
              <img src={d} style={{height:'100%',width:'100%'}}></img>
          </Grid>
      </Grid>
      </Grid>
    </Grid>
  )
}

export default Main