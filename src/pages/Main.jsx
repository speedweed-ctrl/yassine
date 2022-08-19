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
      <Grid item sx={{marginTop:'-5rem'}}>
        <Grid container sx={{width:'100%'}}   >
          <Grid item sx={{backgroundColor:'#217657',width:'70%',height:'25rem' , paddingLeft:'1.5rem'}}>
          <Typography variant="h3" gutterBottom component="div" color='white' sx={{paddingTop:'2rem'}} >
          Qui Sommes Nous

            </Typography><br></br><br></br>
            <Typography variant="subtitle1" gutterBottom component="div" color='white' sx={{fontSize:'1.2rem'}}>
             La Famille du coeur est une Fondation engager dans le marche du tourisme de bien etre qui  cible les individue est les entreprise
             </Typography>
          </Grid>
          <Grid item sx={{width:'30%',height:'25rem'}}>
              <img src={a} alt="aa" style={{height:'100%',width:'100%'}}></img>
          </Grid>
      </Grid>
      </Grid>
      <Grid item>
      <Grid container sx={{width:'100%'}} direction='row-reverse'  >
          <Grid item sx={{backgroundColor:'#1ebbd7',width:'70%',height:'25rem' , paddingLeft:'1.5rem'}}>
          <Typography variant="h3" gutterBottom component="div" color='white' sx={{paddingTop:'2rem'}} >
            Notre Mission

            </Typography><br></br><br></br>
            <Typography variant="subtitle1" gutterBottom component="div" color='white' sx={{fontSize:'1.2rem'}}>
            <span>
              La Famille du coeur  prend en charge le Bien etre des ses clientele quelle que soit les individue
              ou les entreprise pour </span><br></br> relver le stress est prevenir les 'burn out'
            </Typography>
          </Grid>
          <Grid item sx={{width:'30%',height:'25rem'}}>
              <img src={b} alt="aa"  style={{height:'100%',width:'100%'}}></img>
          </Grid>
      </Grid>
      </Grid>
      <Grid item>
        <Grid container sx={{width:'100%'}}   >
          <Grid item sx={{backgroundColor:'#217657',width:'70%',height:'25rem' , paddingLeft:'1.5rem'}}>
          <Typography variant="h3" gutterBottom component="div" color='white' sx={{paddingTop:'2rem'}} >
            Note Objectif

            </Typography><br></br><br></br>
            <Typography variant="subtitle1" gutterBottom component="div" color='white' sx={{fontSize:'1.2rem'}}>
            <span>
              La Famille du coeur  vise à améliorer la visibilite du domain du tourisme de bien etre ,
              améliorer la connaissance du pratique du bien etre holistique</span><br></br> et de cree des service personnalisés pour sa clientele
            </Typography>
          </Grid>
          <Grid item sx={{width:'30%',height:'25rem'}}>
              <img src={c} alt="aa" style={{height:'100%',width:'100%'}}></img>
          </Grid>
      </Grid>
      </Grid>
      <Grid item sx={{marginBottom:'-15rem'}}>
      <Grid container sx={{width:'100%'}} direction='row-reverse'  >
          <Grid item sx={{backgroundColor:'#1ebbd7',width:'70%',height:'25rem' , paddingLeft:'1.5rem'}}>
          <Typography variant="h3" gutterBottom component="div" color='white' sx={{paddingTop:'2rem'}}  >
              Les Partenariat
            </Typography><br></br><br></br>
            <Typography variant="subtitle1" gutterBottom component="div" color='white' sx={{fontSize:'1.2rem'}}>
            <span>
              A fin de parvenir d'achevé notre mission on a fait des partenariat avec des centre de formation comme "centre fleur de lotus " et " AHLA " , est ausi avec des resort touristique come "Yorenka Tasorentsi
Amazonie"
              </span><br></br> 
            </Typography>
          </Grid>
          <Grid item sx={{width:'30%',height:'25rem'}}>
              <img src={d} alt="aa" style={{height:'100%',width:'100%'}}></img>
          </Grid>
      </Grid>
      </Grid>
    </Grid>
  )
}

export default Main