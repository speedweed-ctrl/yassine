import React from 'react'
import Grid  from '@material-ui/core/Grid'
import { packages } from './packs'
import EnCard from '../components/EnCard'

const Packs = () => {
  return (
    <>
    <div style={{paddingTop:'2.5rem',}}>
    <Grid container spacing={4} lg={12} xl={12} md={12} sm={12} xs={12} >
        {packages.map((pk=>{
            return(
            <Grid item >
                    <EnCard props={pk}/>
            </Grid>
            )
        }))}
    </Grid>
    </div>
    </>
  )
}

export default Packs