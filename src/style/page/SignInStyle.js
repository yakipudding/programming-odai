import { makeStyles } from '@material-ui/core/styles';
const SignInStyle = makeStyles(theme => ({
  p: {
    textAlign: 'center',
    fontSize: 'small',
    marginTop :3,
    marginBottom: 3,
    [theme.breakpoints.up('sm')]: {
      fontSize: 'medium',
      marginTop :8,
      marginBottom: 8,
    },
  },
  container: {
    width: 300,
    display: 'float',
    margin: '0 auto',
  },
  textField: {
    width: 300,
  },
  button: {
    width: 300,
    marginTop: 5,
    marginBottom: 5,
  },
}));
export default SignInStyle