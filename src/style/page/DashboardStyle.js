import { makeStyles } from '@material-ui/core/styles';
const DashboardStyle = makeStyles(theme => ({
  h: {
    textAlign: 'center',
    color: '#804947',
  },
  p: {
    textAlign: 'center',
    marginTop :0,
    marginBottom: 30,
  },
  mobileMenu: {
    margin: '0 auto',
    width: 200,
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  mobileButton: {
    width: 200,
    marginBottom: 10,
  },
  table: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      margin: 'auto',
    },
  },
  tr: {
    height: 50,
  },
  button: {
    width: 200,
  },
}));

export default DashboardStyle