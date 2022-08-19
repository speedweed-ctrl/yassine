import React from 'react'
import Grid  from '@material-ui/core/Grid'
import  {par}  from './partners'
import Scard from '../components/scard'

const Part = () => {
    return (
        <>
        <div style={{paddingTop:'2.5rem',}}>
        <Grid container spacing={4} lg={12} xl={12} md={12} sm={12} xs={12}>
            {par.map((pa=>{
                return(
                <Grid item >
                        <Scard props={pa}/>
                </Grid>
                )
            }))}
        </Grid>
        </div>
        </>
      )
}

export default Part