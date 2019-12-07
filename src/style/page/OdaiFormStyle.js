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
  inputField: {
    boxSizing: 'border-box',
    width: '100%',
    height: '100%',
    resize: 'none',
    padding: '12px 14px',
    color: 'currentColor',
    lineHeight: '1em',
    font: 'inherit',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 4,
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