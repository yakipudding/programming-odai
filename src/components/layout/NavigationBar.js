import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Button, IconButton, Menu, MenuItem, Toolbar} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import CreateIcon from '@material-ui/icons/Create';
import MenuIcon from '@material-ui/icons/Menu';
import { signOut } from '../../biz/Auth';
import NavigationStyle from '../../style/page/NavigationStyle'

// ナビゲーションバー
function NavigationBar(props) {
  const classes = NavigationStyle();
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = React.useState(null);
  const [profileAnchorEl, setProfileAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMenuAnchorEl);
  const isProfileMenuOpen = Boolean(profileAnchorEl);

  const handleMobileMenuOpen = event => {
    setMobileMenuAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMenuAnchorEl(null);
  };
  const handleProfileMenuOpen = event => {
    setProfileAnchorEl(event.currentTarget);
  };
  const handleProfileMenuClose = () => {
    setProfileAnchorEl(null);
  };
  const handleSignOut = () => {
    signOut();
  }

  const mobileMenuId = 'mobile-menu';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMenuAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem component={Link} to="/OdaiSearch?mode=popular" onClick={handleMobileMenuClose}>人気のお題</MenuItem>
      <MenuItem component={Link} to="/OdaiSearch?mode=new" onClick={handleMobileMenuClose}>新着のお題</MenuItem>
      <MenuItem component={Link} to="/ReportSearch" onClick={handleMobileMenuClose}>みんなの作ってみた</MenuItem>
    </Menu>
  );

  const profileMenuId = 'profile-menu';
  const renderProfileMenu = (
    <Menu
      anchorEl={profileAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={profileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isProfileMenuOpen}
      onClose={handleProfileMenuClose}
    >
      <MenuItem onClick={handleSignOut}>サインアウト</MenuItem>
    </Menu>
  );

  const toolBar = (
    <Toolbar>
      <div className={classes.mobileMenu}>
        <IconButton
          edge="end"
          aria-label="mobilemenu"
          aria-controls={mobileMenuId}
          aria-haspopup="true"
          onClick={handleMobileMenuOpen}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <a href="/" className={classes.mobileLogo}>
          <img alt="logo" src="/logo.png" className={classes.logo} />
        </a>
        <span className={classes.mobileTitle}>
          プログラミングお題サイト
        </span>
      </div>
      <div className={classes.title}>
        <a href="/">
          <img alt="logo" src="/logo.png" className={classes.logo} />
        </a>
        <Button color="inherit" href="/OdaiSearch?mode=popular">人気のお題</Button>
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
            aria-label="profile"
            aria-controls={profileMenuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </div>
      </div>
    </Toolbar>
  )
  const toolBarNotLogin = (
    <Toolbar>
      <a href="/">
        <img alt="logo" src="/logo.png" className={classes.logo} />
      </a>
      プログラミングお題サイト
    </Toolbar>
  )

  return (
    <div>
      <AppBar position="static" color="primary">
        {props.login ? toolBar : toolBarNotLogin}
      </AppBar>
      {renderMobileMenu}
      {renderProfileMenu}
    </div>
  );
}

export default NavigationBar
