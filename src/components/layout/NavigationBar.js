import React from 'react'
import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';

import AccountCircle from '@material-ui/icons/AccountCircle';
import CreateIcon from '@material-ui/icons/Create';

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
          <div className={classes.title}>
            <a href="/">
              <img src="/logo.png" className={classes.logo} />
            </a>
            <Button color="inherit" href="/OdaiSearch?mode=popular">
              人気のお題
            </Button>
            <Button color="inherit" href="/OdaiSearch?mode=new">新着のお題</Button>
            <Button color="inherit" href="/ReportSearch">みんなの作ってみた</Button>
          </div>
          <div className={classes.section}>
            <div className={classes.createButton}>
              <Button
                variant="contained"
                color="default"
                component={Link}
                to="/OdaiCreate"
                startIcon={<CreateIcon />}
              >
                お題を投稿する
              </Button>
            </div>
            <div>
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
          </div>
          {loginLink}
        </Toolbar>
      </AppBar>      
      {renderMenu}
    </div>
  );
}

export default NavigationBar
