import { makeStyles } from '@material-ui/core/styles';
const NavigationStyle = makeStyles(theme => ({
  logo: {
    marginRight: 5,
  },
  mobileMenu: {
    flexGrow: 1,
    display: 'flex',
    alignContent: 'center',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  mobileLogo: {
    marginTop: 7,
    marginLeft: 10,
  },
  mobileTitle: {
    fontSize: 'small',
    marginTop: 13,
    marginLeft: 2,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      flexGrow: 1,
      display: 'flex',
    },
  },
  section: {
    display: 'flex',
  },
  createButton: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      marginTop: 5,
      marginRight: 5,
    },
  },
}));

export default NavigationStyle