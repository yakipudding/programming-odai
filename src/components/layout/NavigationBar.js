import React from 'react'
import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';

import AccountCircle from '@material-ui/icons/AccountCircle';
import CreateIcon from '@material-ui/icons/Create';
import SearchIcon from '@material-ui/icons/Search';

import { signOut } from '../../biz/Auth';
import { NavigationStyle } from '../../style/CommonStyle'

// ナビゲーションバー
function NavigationBar(props) {
  const classes = NavigationStyle();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    signOut();
  }
  
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleSignOut}>SignOut</MenuItem>
    </Menu>
  );

  //firebase 認証状態に応じたリンク
  const loginLink = props.login ? null : <Button color="inherit" component={Link} to="/SignIn">SignIn</Button>;  

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Button color="inherit" className={classes.title} component={Link} to="/">プログラミングお題サイト　ODAI</Button>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.section}>
            <IconButton
              aria-label="odai create"
              color="inherit"
              href="/OdaiCreate"
            >
              <CreateIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          {loginLink}
        </Toolbar>
      </AppBar>      
      {renderMenu}
    </div>
  );
}

export default NavigationBar
