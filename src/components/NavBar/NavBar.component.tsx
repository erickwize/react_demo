import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { useHistory, useLocation } from 'react-router-dom';
import { IProps } from './NavBar.component.typed';
import {
  SearchWrapper,
  SearchIconWrapper,
  SearchInput,
  Title,
  GrowRemainingSpace,
  AccountImage,
} from './Navbar.component.styled';
import { fetchVideos } from '../../utils/functions';
import { useApp } from '../../providers/App';
import { useYoutubeApi } from '../../providers/YoutubeProvider';
import { FAVORITES_URL, HOME_URL } from '../../utils/constants';
import { useAuth } from '../../providers/Auth';
import user from '../../resources/mock_user.jpg';

function NavBar({ setOpen }: IProps) {
  const { search, setSearch, setVideos, setOpenLogin, setIsLoadingVideos } = useApp();
  const { isAuthenticated } = useYoutubeApi();
  const { authenticated, logout } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);

  const handleChange = (pathname: string) => {
    if (pathname === HOME_URL) {
      return async (evt: React.ChangeEvent<HTMLInputElement>) => {
        const {
          target: { value },
        } = evt;
        setSearch(value);
        if (isAuthenticated) {
          fetchVideos(value, setVideos, setIsLoadingVideos);
        }
      };
    }
    if (pathname === FAVORITES_URL) {
      return (evt: React.ChangeEvent<HTMLInputElement>) => {
        const {
          target: { value },
        } = evt;
        setSearch(value);
      };
    }
    return (evt: React.ChangeEvent<HTMLInputElement>) => {
      console.log(evt);
    };
  };

  const handleClick = () => {
    if (authenticated) {
      return (evt: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElement(evt.currentTarget);
      };
    }
    return () => {
      setOpenLogin(true);
    };
  };

  const handleCloseMenu = () => {
    setAnchorElement(null);
  };

  useEffect(() => {
    fetchVideos('', setVideos, setIsLoadingVideos);
  }, [isAuthenticated, setVideos, setIsLoadingVideos]);

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
        <Title variant="h6" onClick={() => history.push(HOME_URL)}>
          Awesome Video Player
        </Title>
        {location.pathname.includes('/video') === false && (
          <SearchWrapper>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <SearchInput
              placeholder="Search videos..."
              inputProps={{ 'aria-label': 'search' }}
              value={search}
              onChange={handleChange(location.pathname)}
            />
          </SearchWrapper>
        )}
        <GrowRemainingSpace />
        <IconButton
          edge="end"
          aria-label="account of current user"
          color="inherit"
          onClick={handleClick()}
        >
          {authenticated ? <AccountImage src={user} /> : <AccountCircle />}
        </IconButton>
        <Menu
          open={Boolean(anchorElement)}
          onClose={handleCloseMenu}
          anchorEl={anchorElement}
          keepMounted
        >
          <MenuItem
            onClick={() => {
              console.log('clicked');
              logout();
              handleCloseMenu();
            }}
          >
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
