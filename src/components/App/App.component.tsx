import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import AppProvider from '../../providers/App';
import YoutubeProvider from '../../providers/YoutubeProvider';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import VideoDetailPage from '../../pages/VideoDetail';
import NotFound from '../../pages/NotFound';
import Private from '../Private';
import NavBar from '../NavBar';
import Drawer from '../Drawer';
import Login from '../Login';
import Favorites from '../../pages/Favorites';

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <YoutubeProvider>
            <Drawer isOpen={isOpen} setOpen={setIsOpen} />
            <NavBar setOpen={setIsOpen} />
            <Login />
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Private exact path="/favorites">
                <Favorites />
              </Private>
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Route path="/video/:videoId">
                <VideoDetailPage />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </YoutubeProvider>
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
