import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BoardPage from '../BoardPage/BoardPage';
import CardPage from '../CardPage/CardPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/card/:id' component={CardPage} />
        <Route path='/' component={BoardPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
