import { makeStyles } from '@material-ui/core/styles';

export const CommonStyle = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    width: 300,
  },
  textField: {
    width: 300,
    margin: '0 auto',
    display: 'flex',
  },
  menu: {
    width: 300,
  },
  button: {
    width: 300,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  hr:{
    height: 1,
    backgroundColor: 'rgba(128, 73, 71, 0.2)',
    border: 0,
  },
}));

export const NavigationStyle = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'flex',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  section: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  createButton: {
    marginTop: 5,
    marginRight: 5,
  },
  logo: {
    marginRight: 5,
  },
}));

export const DashboardStyle = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  logo:{
    margin: '30px auto',
    width: 228,
  },
  h: {
    textAlign: 'center',
    color: '#804947',
  },
  p: {
    textAlign: 'center',
    marginTop :8,
    marginBottom: 8,
  },
}));

export const OdaiListStyle = makeStyles(theme => ({
  odai: {
    minWidth: 500,
    margin: 5,
  },
  odaititle: {
    fontSize: 20,
  },
  like: {
    fontSize: 'medium',
    paddingLeft: 7,
  },
  likecount: {
    paddingLeft: 2,
  },
  hr:{
    height: 1,
    backgroundColor: 'rgba(128, 73, 71, 0.2)',
    border: 0,
  },
}));

export const TagStyle = makeStyles(theme => ({
  chips: {
    display: 'inline-block'
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export const OdaiDetailStyle = makeStyles(theme => ({
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
  },
  button: {
    display: 'flex',
  },
  reportArea: {
    backgroundColor: '#f5f5f5',
  },
}));

export const ReportListStyle = makeStyles(theme => ({
  content: {
    display: 'block',
  },
  button: {
    marginLeft: 5,
  },
  hr:{
    height: 1,
    backgroundColor: 'rgba(128, 73, 71, 0.2)',
    border: 0,
  },
}));

export const ReportDialogStyle = makeStyles(theme => ({
  textfield: {
    marginBottom: 10,
  },
}));

export const MarkdownFormStyle = makeStyles(theme => ({
  container: {
    position: 'absolute',
    top: 80,
    bottom: 0,
    right: 10,
    left: 10,
    display: 'block',
  },
  'gridTop': {
    width: '100%',
    position: 'absolute',
    right:0,
    left:0,
    top: 0,
    bottom: 0,
  },
  'gridLeft': {
    width: '48%',
    position: 'absolute',
    top: 110,
    bottom: 50,
    left:0,
  },
  'gridRight': {
    width: '48%',
    position: 'absolute',
    top: 110,
    bottom: 50,
    right: 0,
  },
  gridButtom: {
    width: '100%',
    position: 'absolute',
    right:30,
    left:30,
    bottom: 10,
  },
  titleField: {
    display: 'block',
    width: '100%',
    height: '1.1875em',
    padding: '18px 14px',
    font: 'inherit',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    lineHeight: '1.1875em',
    color: 'currentColor',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 4,
    boxSizing: 'border-box',
  },
  tagField: {
    marginBottom: 0,
    font: 'inherit',
    padding: '5px',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    border: '0',
    lineHeight: '1.1875em',
    width: 200,
  },
  tagFieldFocus: {
    outline: 0
  },
  contentDiv: {
    width: '100%',
    position: 'absolute',
    top: 0,
    bottom: 0,
  },
  contentField: {
    width: '100%',
    position: 'absolute',
    top: 0,
    bottom: 0,
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
  previewField: {
    width: '100%',  
  },
  input: {
    display: 'none',
  },
  button: {
    margin: theme.spacing(1),
  },
  submitbutton: {
    width: '100%',
    position: 'absolute',
    bottom: 10,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export const SignInStyle = makeStyles(theme => ({
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
  logo:{
    margin: '30px auto',
    width: 228,
  },
  h: {
    textAlign: 'center',
    color: '#804947',
  },
  p: {
    textAlign: 'center',
    marginTop :8,
    marginBottom: 8,
  },
}));

export default CommonStyle