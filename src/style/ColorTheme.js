import { createMuiTheme } from '@material-ui/core/styles';
export default createMuiTheme({
  "palette": { 
    "common": { 
      "black": "#000",
      "white": "#fff" 
    },
    "background": {
      "paper": "#fff",
       "default": "rgba(255, 220, 219, 1)" 
    },
    "primary": {
      "light": "rgba(255, 147, 143, 1)",
      "main": "rgba(128, 73, 71, 1)",
      "dark": "rgba(138, 35, 31, 1)",
      "contrastText": "#fff" 
    },
    "secondary": { 
      "light": "#ff4081",
      "main": "#f50057",
      "dark": "#c51162",
      "contrastText": "#fff" 
    },
    "error": {
      "light": "#e57373", 
      "main": "#f44336", 
      "dark": "#d32f2f", 
      "contrastText": "#fff" 
    }, 
    "text": { 
      "primary": "rgba(0, 0, 0, 0.87)", 
      "secondary": "rgba(0, 0, 0, 0.64)", 
      "disabled": "rgba(128, 73, 71, 0.5)", 
      "hint": "rgba(0, 0, 0, 0.38)" 
    } 
  },
});