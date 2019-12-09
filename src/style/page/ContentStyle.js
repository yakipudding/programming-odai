import { makeStyles } from '@material-ui/core/styles';
const ContentStyle = makeStyles(theme => ({
  logo:{
    margin: '10px auto',
    width: 150,
    [theme.breakpoints.up('sm')]: {
      margin: '30px auto',
      width: 228,
    },
  },
  logoImage:{
    width: 150,
    [theme.breakpoints.up('sm')]: {
      width: 228,
    },
  },
  h: {
    textAlign: 'center',
    color: '#804947',
    fontSize: 'x-large',
    [theme.breakpoints.up('sm')]: {
      fontSize: 'xx-large',
    },
  },
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
}));
export default ContentStyle