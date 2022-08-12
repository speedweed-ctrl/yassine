import React from 'react'
import a from './1.jpg'
import Typography from '@mui/material/Typography';

const Opener = () => {
  return (
      <div style={{height:''}}>
        <img style={{height:'35rem',width:'100%',filter:"blur(2px)"}} src={a} alt="" />
          <div style={{  position:'relative' ,bottom:'27rem' , left:'3rem', }}>
          <Typography variant="h3" gutterBottom component="div" color='white' >
          Famille de coeur

          </Typography><br></br><br></br><br></br>
          <Typography variant="subtitle1" gutterBottom component="div" color='white'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur
          </Typography>
          </div>
      </div>
  )
}

export default Opener