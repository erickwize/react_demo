import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import AppProvider from '../../providers/App';
import YoutubeProvider from '../../providers/YoutubeProvider';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import VideoDetailPage from '../../pages/VideoDetail';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
import NavBar from '../NavBar';
import Drawer from '../Drawer';

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <YoutubeProvider>
            <Drawer isOpen={isOpen} setOpen={setIsOpen} />
            <NavBar setOpen={setIsOpen} />
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Route path="/video/:videoId">
                <VideoDetailPage />
              </Route>
              <Private exact path="/secret">
                <SecretPage />
              </Private>
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
