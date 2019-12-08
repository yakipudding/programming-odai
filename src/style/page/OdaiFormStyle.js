import { makeStyles } from '@material-ui/core/styles';
const OdaiFormStyle = makeStyles(theme => ({
  form: {
    marginTop: 12,
  },
  imageButtonField: {
    marginTop: 5,
  },
  imageButtonHidden: {
    display: 'none',
  },
  content: {
    width: '100%',
    position: 'absolute',
    top: 220,
    bottom: 50,
  },
  contentGrid: {
    height: '100%',
    maxHeight: '100%',
  },
  contentPreviewGrid: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      height: '100%',
      maxHeight: '100%',
    },
  },
  contentFieldDiv: {
    boxSizing: 'border-box',
    width: '100%',
    height: '100%'
  },
  contentField: {
    boxSizing: 'border-box',
    width: '100%',
    height: '100%'
  },
  previewField: {
    boxSizing: 'border-box',
    width: '100%',  
    maxHeight: '100%',
    overflowX: 'hidden',
    overflowY: 'auto',
  },
  footer: {
    width: '100%',
    position: 'absolute',
    bottom: 10,
  },
  submitbutton: {
    width: '100%',
  },
}));
export default OdaiFormStyle