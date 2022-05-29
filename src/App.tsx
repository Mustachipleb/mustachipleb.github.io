import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from 'react-router-dom';

import Home from './pages/home';
import Skills from './pages/skills';
import NotFound from './pages/notfound';
import Contact from './pages/contact';
import './App.css';
import Header from './pages/_header';
import Projects from './pages/projects';

const App = () => (
  <Router>
    <Helmet>
      <title>Nicolas Van Damme</title>
    </Helmet>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/skills" element={<Skills/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/404" element={<NotFound/>} />
      <Route path="*" element={<Navigate to='/404' replace />} />
    </Routes>
  </Router>
);

export default App;
