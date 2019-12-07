import { makeStyles } from '@material-ui/core/styles';
const SignInStyle = makeStyles(theme => ({
  description: {
    width:600,
    margin: '0 auto',
    textAlign: 'center',
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