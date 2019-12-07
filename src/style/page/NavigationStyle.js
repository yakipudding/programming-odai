import { makeStyles } from '@material-ui/core/styles';
const NavigationStyle = makeStyles(theme => ({
  title: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      flexGrow: 1,
      display: 'flex',
    },
  },
  section: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  createButton: {
    marginTop: 5,
    marginRight: 5,
  },
  logo: {
    marginRight: 5,
  },
}));

export default NavigationStyle