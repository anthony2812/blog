import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import DialogDetail  from './dialog/DialogDetail';

function MainFeaturedPost(props) {
  const { post } = props;
  const [openDialog,setOpenDialog] = React.useState(false)
  
  const handleDialog = (e) => {
    e.preventDefault()
    
    setOpenDialog(!openDialog)
  };



  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'white',
        color: '#000',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
       // backgroundImage: `url(${post.image})`,
      }}
    >
      {console.log(openDialog)}
      {<DialogDetail title = {post.title} open ={openDialog}/>}
    
    
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {post.description}
            </Typography>
            <Link variant="subtitle1" href='#' onClick={(e)=>handleDialog(e)}>
              {post.linkText}
            </Link>
          </Box>
        </Grid>

        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              pt:{md:6},
              pr:{md:6}
            }}
          >
           <img style={{ float: 'right'}} width={450} src={post.image} alt={post.imageText} />
          </Box>
        </Grid>

      </Grid>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageText: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MainFeaturedPost;