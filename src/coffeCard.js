import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import ShareIcon from "@material-ui/icons/Share";
import {
  Typography,
  Button,
  Avatar,
  CardHeader,
  IconButton,
} from "@material-ui/core";

const CoffeCard = (props) => {
  const { avatarUrl, title, subtitle, description, imageUrl } = props;

  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={avatarUrl}></Avatar>}
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={subtitle}
      />
      <CardMedia style={{ height: "150px" }} image={imageUrl} />
      <CardContent>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy now</Button>
        <Button size="small">Offer</Button>
      </CardActions>
    </Card>
  );
};

export default CoffeCard;
