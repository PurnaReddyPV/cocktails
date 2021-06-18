import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const ImageCheck = (url) => {
  // console.log("check", url);
  // if (url.length > 0) {
  //   return url;
  // }
  return "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png";
};

export default function CustomCard({ name, description, img, id }) {
  const classes = useStyles();
  return (
    <Link to={`/about/${id}`} style={{ textDecoration: "none" }}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Cock tail"
            height="140"
            image={ImageCheck(img)}
            title="Cock Tail"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            More info
          </Button>
        </CardActions>
      </Card>
    </Link>
  );
}
