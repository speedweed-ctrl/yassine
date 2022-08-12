import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import a from './m.jpg'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CallIcon from '@mui/icons-material/Call';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Pcard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 , marginTop:'2rem' }}>
      <CardHeader
        
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="maison la  coeur"
        subheader=" 42 Rue Mendes France"
      />
      <CardMedia
        component="img"
        height="194"
        image={a}
        alt="some guy"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam aliquam, natus deserunt optio autem quisquam impedit amet sunt accusantium et tempora voluptate aut, fugiat, deleniti fuga eveniet! Earum, laudantium ullam?
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share">
          <AddCircleIcon />
        </IconButton>
        <IconButton aria-label="share">
          <CallIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>desciption:</Typography>
          <Typography paragraph>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam aliquam, natus deserunt optio autem quisquam impedit amet sunt accusantium et tempora voluptate aut,
          </Typography>
          <Typography paragraph>offered programs:</Typography>

          <Typography paragraph>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam non nesciunt aliquid vitae sunt. Ducimus incidunt inventore quia, voluptatum enim rerum omnis sapiente, quidem ipsa recusandae quibusdam distinctio, suscipit dolores.           Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam non nesciunt aliquid vitae sunt. Ducimus incidunt inventore quia, voluptatum enim rerum omnis sapiente, quidem ipsa recusandae quibusdam distinctio, suscipit dolores.

          </Typography>
          <Typography paragraph>the team review :</Typography>
          <Typography paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident iusto modi saepe aperiam mollitia eum molestias nemo quod corporis nostrum unde, quisquam aspernatur, dignissimos inventore, ut amet eius voluptas quia.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}