import React, { Component } from "react";
import NavigationBar from './NavigationBar'
import SignIn from '../auth/SignIn'
import { onAuthStateChanged } from '../../biz/Auth'
import ColorTheme from '../../style/ColorTheme'
import { ThemeProvider } from '@material-ui/styles';

export default function(ComposedComponent) {
  class Wrapper extends Component {
    constructor(props) {
      super(props);
      this.state = {
        login: false,
        loading: true,
      }
    }
    componentDidMount(){
      //認証状態によって切り替え
      onAuthStateChanged(this.setStateLogin)
    }

    setStateLogin = (user) => {
      this.setState(
        {
          login: user !== null,
          loading: false
        });
    }

    theme = ColorTheme;

    render(){
      if (this.state.loading) {
        return null
      }
      return(
        <ThemeProvider theme={this.theme}>
          <NavigationBar login={this.state.login} />
          {this.state.login ? <ComposedComponent {...this.props} /> : <SignIn {...this.props} />}
        </ThemeProvider>
      )
    }

  }
  return Wrapper;
}