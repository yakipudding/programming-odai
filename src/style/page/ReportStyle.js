import { makeStyles } from '@material-ui/core/styles';
const ReportStyle = makeStyles(theme => ({
  reportHeader: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      flexDirection: 'row',
    }
  },
  button: {
    marginLeft: 0,
    [theme.breakpoints.up('sm')]: {
      marginLeft: 5,
    }
  },
  reporter: {
    fontSize: 'small',
    [theme.breakpoints.up('sm')]: {
      fontSize: 'medium',
    }
  },
  comment: {
    color: '#777',
    fontSize: 'small',
  },
  hr:{
    height: 1,
    backgroundColor: 'rgba(128, 73, 71, 0.2)',
    border: 0,
  },
}));
export default ReportStyle