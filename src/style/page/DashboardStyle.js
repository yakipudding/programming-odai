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