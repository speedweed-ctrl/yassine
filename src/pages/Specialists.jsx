import React from 'react'
import Grid  from '@material-ui/core/Grid'
import  {spec}  from './spec'
import Scard from '../components/scard'
const Specialists = () => {
  return (
    <Grid container spacing={4} lg={12} xl={12} md={12} sm={12} xs={12}>
        {spec.map((sp=>{
            return(
            <Grid item >
                    <Scard props={sp}/>
            </Grid>
            )
        }))}
    </Grid>
  )
}

export default Specialists