import React from 'react';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import { styles } from "../style/styles";

const Header = ({ classes }) => (
  <AppBar position="static" className={classes.appBar}>
    <Toolbar>
      <CameraIcon className={classes.icon} />
      <Typography variant="h6" color="inherit" noWrap>
        Json Schema form 101
      </Typography>
    </Toolbar>
  </AppBar>
)
export default withStyles(styles)(Header);