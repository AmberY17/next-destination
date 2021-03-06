import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Avatar, Typography, Toolbar, Button } from '@material-ui/core';

import useStyles from './styles';
import memories from '../../images/memories.png';

const NavBar = () => {
  const classes = useStyles();

  const user = null;

  return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
      <div className={classes.branchContainer}>
        <Typography
          component={Link}
          to='/'
          className={classes.heading}
          variant='h2'
          align='center'
        >
          Next Destination
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt='memories'
          height='60'
        ></img>
      </div>
      <Toolbar className={classes.toolbaar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant='h6'>
              {user.result.name}
            </Typography>
            <Button
              variant='contained'
              className={classes.logout}
              color='secondary'
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to='/auth'
            variant='contained'
            color='primary'
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
