import React from 'react';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';
import ListIcon from '@material-ui/icons/List';
import CachedIcon from '@material-ui/icons/Cached';
import { Link } from 'react-router';

export const drawerMenu = (
  <div>
    <Link to="/tests/create">
      <ListItem button>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItemText primary="Create Test" />
      </ListItem>
    </Link>
    <Divider />
    <Link to={`/`}>
      <ListItem button>
        <ListItemIcon>
          <ListIcon />
        </ListItemIcon>
        <ListItemText primary="View Tests" />
      </ListItem>
    </Link>
    <Divider />
    <ListItem button>
      <ListItemIcon>
        <CachedIcon />
      </ListItemIcon>
      <ListItemText primary="Run All Tests" />
    </ListItem>
  </div>
);