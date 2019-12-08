import { makeStyles } from '@material-ui/core/styles';
const OdaiDetailStyle = makeStyles(theme => ({
  header: {
    marginTop: 30,
  },
  title: {
    margin: 0,
    display: 'inline-block',
  },
  contentHeader: {
    display: 'flex',
    marginBottom: 5,
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