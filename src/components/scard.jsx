import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import av from './avatar.jpg'

export default function Scard({props}) {
  return (
    <Card sx={{ maxWidth: 345 , marginTop:'2rem'  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="320"
          image={av}
          
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.Name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {props.Des}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" sx={{color:'#1ebbd7'}}>
         see full profile
        </Button>
      </CardActions>
    </Card>
  );
}
