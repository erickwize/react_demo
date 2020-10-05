import React from 'react';
import BaseDrawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import ListItemText from '@material-ui/core/ListItemText';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useHistory, useLocation } from 'react-router-dom';

import { DrawerList } from './Drawer.component.styled';
import { IProps } from './Drawer.component.typed';
import { useAuth } from '../../providers/Auth';

function Drawer({ isOpen, setOpen }: IProps) {
  const history = useHistory();
  const location = useLocation();
  const { authenticated } = useAuth();

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    )
      return;

    setOpen(open);
  };

  return (
    <BaseDrawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
      <DrawerList
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          <ListItem
            button
            selected={location.pathname === '/'}
            onClick={() => history.push('/')}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          {authenticated && (
            <ListItem
              button
              selected={location.pathname === '/favorites'}
              onClick={() => history.push('/favorites')}
            >
              <ListItemIcon>
                <FavoriteIcon />
              </ListItemIcon>
              <ListItemText primary="Favorites" />
            </ListItem>
          )}
        </List>
      </DrawerList>
    </BaseDrawer>
  );
}

export default Drawer;
