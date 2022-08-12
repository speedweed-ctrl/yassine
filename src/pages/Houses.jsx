import React from 'react'
import Grid  from '@material-ui/core/Grid'
import  {spec}  from './spec'
import Pcard from '../components/Pcard'

const Houses = () => {
  return (
    <Grid container spacing={4} lg={12} xl={12} md={12} sm={12} xs={12}>
        {spec.map((sp=>{
            return(
            <Grid item >
                    <Pcard props={sp}/>
            </Grid>
            )
        }))}
    </Grid>
  )
}

export default Houses