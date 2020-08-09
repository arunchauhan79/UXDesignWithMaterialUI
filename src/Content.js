import React from "react";
import CoffeCard from "./coffeCard";
import { Grid } from "@material-ui/core";
import coffeeMakerList from "./constant";

const Content = () => {
  return (
    <Grid container spacing={4}>
      {coffeeMakerList.map((coffeeObj) => (
        <Grid item xs={12} sm={4}>
          <CoffeCard {...coffeeObj} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Content;
