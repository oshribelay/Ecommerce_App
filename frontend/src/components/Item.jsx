import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import { AddShoppingCart, ExpandMore } from '@mui/icons-material';

const Expand = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Item(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  console.log(props.imageUrl)
  return (
    <Card sx={{ width: "320px", float: "left", mx: "50px", my: "20px" }}>
      <CardHeader
        title={props.title}
        subheader={props.price}
        /* sx to allign the text later */
      />
      <CardMedia component="img" height="256" src={props.imageUrl} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.shortDescription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <AddShoppingCart />
        </IconButton>
        <Expand
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMore />
        </Expand>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{props.firstTitle}</Typography>
          <Typography paragraph>{props.firstDesc}</Typography>
          <Typography paragraph>{props.secondTitle}</Typography>
          <Typography paragraph>{props.secondDesc}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
