import * as React from "react";
import { nodeProps } from "../interface";
import Paper from './Paper';
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

import { Link } from "gatsby";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },

    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
  })
);

const Blogpost = (props: nodeProps) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    
    <div>
      <Card className={classes.root} style={{width:'100%', display:'flex', flexDirection:'column'}}>
        <CardHeader
          
          action={
            <IconButton aria-label="settings">
              
            </IconButton>
          }
          title={props.detail.title}
          subheader={props.detail.createdAt}
        />
        <CardMedia
          className={classes.media}
          image={props.detail.featuredImage.fluid.src}
          title={props.detail.slug}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.detail.excerpt.excerpt}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
          
          </IconButton>
          <IconButton aria-label="share">
          
          </IconButton>

         

          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <Link to ='/blog/contentful-blog-post1'>
          
           </Link>
          </IconButton>: 
          <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <Link to ='/blog/contentful-blog-post2'>

         </Link>
        </IconButton>
        </CardActions>
      </Card>

    {/* //   // <div>{props.detail.createdAt}

    //   // <br></br>
      
      
      
    //   // <img src={props.detail.featuredImage.fluid.src} style={{width:'200px'}}/>

    //   // {props.detail.slug}
    //   // {/* <div><Paper></Paper></div> */}
    //   </div>
    // // </div> */}

    // <div style={{display:'flex', flexDirection:'column'}}>
    //   <div>
    //   <h1>{props.detail.title}</h1>
    //   </div>

    //   <div>
    //   <h2>{props.detail.createdAt}</h2>
    //   </div>

    //   <div>
    //   <img src={props.detail.featuredImage.fluid.src}/>
    //   </div>

    //   <div>
    //   {props.detail.excerpt.excerpt}
    //   </div>



    // </div>
  );
};

export default Blogpost;