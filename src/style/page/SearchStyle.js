import { makeStyles } from '@material-ui/core/styles';
const SearchStyle = makeStyles(theme => ({
  h1: {
    color: '#804947',
    borderBottom: '1px solid rgba(128, 73, 71, 0.5)',
    fontSize: 'x-large',
    [theme.breakpoints.up('sm')]: {
      fontSize: 'xx-large',
    },
  },
}));
export default SearchStyle