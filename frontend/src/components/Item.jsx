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
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../reducers/cart';
import { AddShoppingCart, ExpandMore } from "@mui/icons-material";
import bar from "../images/bar.png"
import whey from "../images/whey.png"
import creatine from "../images/creatine.png"

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

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  async function handleClick(event) {
    const itemAdded = event.currentTarget.id;
    const res = await axios.get(
      `http://localhost:8000/supplements/${itemAdded}`
    );
    const { priceInCents, name, price, title, imageUrl } = res.data;

    dispatch(addItem({ name: name, price: price, priceInCents: priceInCents }));
    console.log(cart)
  }

  return (
    <Card
      name={props.name}
      sx={{ width: "320px", float: "left", mx: "50px", my: "20px", backgroundColor: "rgba(255,255,255,0)" }}
    >
      <CardHeader
        title={props.title}
        subheader={props.price}
        /* sx to allign the text later */
      />
      <CardMedia component="img" height="256" src={ props.name === "bar" ? bar :
                                                    props.name === "whey" ? whey :
                                                    props.name === "creatine" ? creatine :
                                                    ""} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.shortDescription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          id={props.name}
          aria-label="add to favorites"
          onClick={handleClick}
        >
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
