import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';

import Home from './pages/home';
import Skills from './pages/skills';
import NotFound from './pages/notfound';
import Contact from './pages/contact';
import './App.css';
import Header from './pages/_header';
import projects from './pages/projects';

const App = () => (
  <Router>
    <Helmet>
      <title>Nicolas Van Damme</title>
    </Helmet>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/skills" component={Skills} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={projects} />
      <Route path="/404" component={NotFound} />
      <Redirect path="/*" to="/404" />
    </Switch>
  </Router>
);

export default App;
