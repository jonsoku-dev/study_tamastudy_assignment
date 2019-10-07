import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from '../styles/GlobalStyle';
import Main from '../routes/Main/MainContainer';

const App = () => (
  <>
    <GlobalStyle></GlobalStyle>
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </Router>
  </>
);

export default App;
