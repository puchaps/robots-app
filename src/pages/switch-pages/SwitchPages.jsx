import React from "react";
import { Route, Switch } from "react-router-dom";

import About from "../../components/about-components/about/About";
import ContentDetails from "../../components/content-components/content-details/ContentDetails";
import Content from "../../components/content-components/content/Content";

const SwitchPages = () => (
  <Switch>
    <Route exact path="/" component={Content} />
    <Route path="/about" component={About} />
    <Route path="/:robotId" component={ContentDetails} />
  </Switch>
);

export default SwitchPages;
