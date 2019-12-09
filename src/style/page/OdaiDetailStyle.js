import { makeStyles } from '@material-ui/core/styles';
const OdaiDetailStyle = makeStyles(theme => ({
  header: {
    marginTop: 30,
    display: 'flex',
    flexDirection: 'row',
  },
  count: {
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    margin: 0,
  },
  contentHeader: {
    display: 'flex',
    marginBottom: 5,
    fontSize: 'small',
    [theme.breakpoints.up('sm')]: {
      fontSize: 'medium',
    }
  },
  contentH2: {
    margin: 0,
    flexGrow: 1,
    color: '#804947',
  },
  button: {
    display: 'flex',
  },
  reportArea: {
    backgroundColor: '#f5f5f5',
  },
}));
export default OdaiDetailStyle