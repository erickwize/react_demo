import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import { IProps } from './NavBar.typed';
import { SearchWrapper, SearchIconWrapper, SearchInput } from './Navbar.styles';

function NavBar({ setOpen }: IProps) {
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
        <Typography variant="h6">Awesome Video Player</Typography>
        <SearchWrapper>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <SearchInput
            placeholder="Search videos..."
            inputProps={{ 'aria-label': 'search' }}
          />
        </SearchWrapper>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
