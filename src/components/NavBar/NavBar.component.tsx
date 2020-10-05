import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import { useHistory, useLocation } from 'react-router-dom';
import { IProps } from './NavBar.component.typed';
import {
  SearchWrapper,
  SearchIconWrapper,
  SearchInput,
  Title,
} from './Navbar.component.styled';
import { fetchVideos } from '../../utils/functions';
import { useApp } from '../../providers/App';
import { useYoutubeApi } from '../../providers/YoutubeProvider';

function NavBar({ setOpen }: IProps) {
  const { search, setSearch, setVideos } = useApp();
  const { isAuthenticated } = useYoutubeApi();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    fetchVideos('', setVideos);
  }, [isAuthenticated, setVideos]);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </IconButton>
        <Title variant="h6" onClick={() => history.push('/')}>
          Awesome Video Player
        </Title>
        {location.pathname === '/' && (
          <SearchWrapper>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <SearchInput
              placeholder="Search videos..."
              inputProps={{ 'aria-label': 'search' }}
              value={search}
              onChange={async (evt) => {
                const {
                  target: { value },
                } = evt;
                setSearch(value);
                if (isAuthenticated) {
                  fetchVideos(value, setVideos);
                }
              }}
            />
          </SearchWrapper>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
