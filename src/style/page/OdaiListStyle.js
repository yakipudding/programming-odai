import { makeStyles } from '@material-ui/core/styles';
const OdaiListStyle = makeStyles(theme => ({
  odai: {
    margin: 5,
  },
  odaiTitle: {
    fontSize: 20,
  },
  icon: {
    fontSize: 'medium',
    paddingLeft: 7,
  },
  count: {
    paddingLeft: 2,
  },
  hr:{
    height: 1,
    backgroundColor: 'rgba(128, 73, 71, 0.2)',
    border: 0,
  },
}));
export default OdaiListStyle