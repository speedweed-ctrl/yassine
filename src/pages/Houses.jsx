import React from 'react'
import Grid  from '@material-ui/core/Grid'
import  {spec}  from './spec'
import Pcard from '../components/Pcard'
import Filter2 from '../components/Filter2'

const Houses = () => {
  return (
    <>
    <Filter2></Filter2>
   <Grid container spacing={5} lg={12} xl={12} md={12} sm={12} xs={12} >
        {spec.map((sp=>{
            return(
            <Grid item >
                    <Pcard props={sp}/>
            </Grid>
            )
        }))}
    </Grid>
    </>
  )
}

export default Houses