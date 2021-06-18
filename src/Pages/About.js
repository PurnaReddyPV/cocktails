import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { Grid } from "@material-ui/core";
import { staticData } from "../Data/Data";
import CheckboxLabels from "../Components/Checkbox";
import { Button } from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";
import AddIngredientModal from "../Components/IngredientModal/AddIngredientModal";

import "./About.css";

const About = () => {
  let { id } = useParams();
  let [currentId, setCurrentId] = React.useState(id);
  let [show, setShow] = React.useState(false);
  let [customIngredients, setCustomIngredients] = React.useState([]);

  let [list, setList] = React.useState([]);

  const handleShow = () => {
    setShow(!show);
  };
  let [customList, setCustomList] = React.useState([]);

  const addCustomIngredients = (item) => {
    console.log("check here", item);
    const final_value = item.value;
    let currentValues = [...customList];
    currentValues.push(final_value);
    setCustomList(currentValues);
    // let currentList = [...customListlist];
    // let finalList = [currentList, lists.value];
    // console.log("hewll", finalList);
    // setCustomList(finalList);
  };

  let required_obj = staticData.filter((ele, index) => ele.id == currentId)[0];
  console.log("check", required_obj);
  return (
    <Grid container className="about_page_container">
      <Grid container>
        <Grid item xs={6} container justify="center">
          <img
            width={500}
            height={400}
            src="https://www.patrontequila.com/binaries/largeretina/content/gallery/patrontequila/recipes/patron-citronge-orange-liqueur/citr-nge-cosmo/cocktail.jpg"
          />
        </Grid>
        <Grid item xs={2}>
          <>
            <strong>{required_obj.name}</strong>
            <ul>
              {required_obj.ingredients.map((ele, idx) => (
                <li>
                  <span style={{ padding: "2px" }}>{ele}</span>
                </li>
              ))}
            </ul>
          </>
        </Grid>
        <Grid item xs={2}>
          <>
            {customList && customList.length > 0 ? (
              <strong>Custom Ingredients</strong>
            ) : null}
            <ul>
              {customList.map((ele, idx) => (
                <li>
                  <span style={{ padding: "2px" }}>{ele}</span>
                </li>
              ))}
            </ul>
          </>
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid container style={{ marginTop: "20px" }}>
        <Grid item xs={12} container justify="center">
          <CheckboxLabels />
        </Grid>
      </Grid>
      <Grid container style={{ margin: "20px 0px " }}>
        <Grid item xs={12} container justify="center">
          {/* <Button
            variant="contained"
            color="primary"
            onClick={handleShow}
            startIcon={<AddBoxIcon />}
          >
            Add on ingredient
          </Button> */}
          <AddIngredientModal
            show={show}
            addCustomIngredients={addCustomIngredients}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
