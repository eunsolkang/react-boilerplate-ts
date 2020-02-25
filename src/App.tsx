import React from 'react';
import { Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import AuthPage from './pages/AuthPage';

const App: React.FC = () => {
  return (
    <div>
      <Route exact component={AuthPage} path='/login'></Route>
      <Route exact component={MainPage} path='/'></Route>
    </div>
  );
}

export default App;
