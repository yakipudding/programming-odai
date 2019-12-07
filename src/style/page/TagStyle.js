import { makeStyles } from '@material-ui/core/styles';
const TagStyle = makeStyles(theme => ({
  chips: {
    display: 'inline-block'
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));
export default TagStyle