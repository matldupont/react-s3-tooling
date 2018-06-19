import React, { Fragment } from 'react';
import { render } from 'react-dom';

// Global stylesheet
import './global.styled';

import Main from './components/main';
import Header from './components/header';

const App = () => (
  <Fragment>
    <Header />
    <Main />
  </Fragment>
);

render(<App />, document.getElementById('root'));
