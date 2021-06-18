import "./App.css";
import { Button } from "@material-ui/core";
import NavBar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import IngredientsDropable from "./Components/IngredientsDropable/IngredientsDropable";
import ReactDnd from "../src/Components/ReactDnd/ReactDnd";
import FinalPage from "./Components/FinalScreen";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <br />
      <br />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about/:id" exact>
          <About />
        </Route>
        <Route path="/add-custom-beverage">
          <IngredientsDropable />
        </Route>
        <Route path="/final-Page">
          <FinalPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
