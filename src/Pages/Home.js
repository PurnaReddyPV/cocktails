import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import CustomCard from "../Components/Card/Card";
import { staticData } from "../Data/Data";
const Home = () => {
  return (
    <>
      <Grid container spacing={2} justify="space-around">
        {staticData.map((ele, idx) => (
          <Grid item>
            <CustomCard
              name={ele.name}
              description={ele.description}
              id={ele.id}
              img={ele.img}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Home;
