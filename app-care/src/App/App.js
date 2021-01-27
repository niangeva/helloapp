import React from 'react';

import { BrowserRouter as Router} from "react-router-dom";
import ScrollToTop from './ScrollToTop'

import Routes from './Routes';
import { Fragment } from 'react';

import '../App.css';

function App() {
  return (
    <div className="App">
      <Router >
        <Fragment>
          <ScrollToTop>
            <Routes />
          </ScrollToTop>
        </Fragment>
      </Router>

      
    </div>
  );
}

export default App;
