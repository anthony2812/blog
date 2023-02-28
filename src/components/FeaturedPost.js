import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import DialogDetail  from './dialog/DialogDetail';
function FeaturedPost(props) {
  const { post } = props;
  const [openDialog,setOpenDialog] = React.useState(false)
  
  const handleDialog = (e) => {
    e.preventDefault()
    
    setOpenDialog(!openDialog)
  };
  return (
    <Grid item xs={12} md={6}>
     {<DialogDetail title = {post.title} content = {post.content} type={post.type} open ={openDialog}/>}
      <CardActionArea component="a" href="#" onClick={(e)=>handleDialog(e)}>
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {post.date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.description}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue leyendo...
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 190, display: { xs: 'none', sm: 'block' } }}
            image={post.image}
            alt={post.imageLabel}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturedPost;