import React, { useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import { IProps } from './NavBar.component.typed';
import { SearchWrapper, SearchIconWrapper, SearchInput } from './Navbar.component.styles';
import { fetchVideos } from '../../utils/fns';
import { useApp } from '../../providers/App';
import { useYoutubeApi } from '../../providers/YoutubeProvider';

function NavBar({ setOpen }: IProps) {
  const { search, setSearch, setVideos } = useApp();
  const { isAuthenticated } = useYoutubeApi();

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
        <Typography variant="h6">Awesome Video Player</Typography>
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
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
