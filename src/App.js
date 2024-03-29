import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Wrapper from "./components/layout/Wrapper";
import SignIn from "./components/auth/SignIn";
import SignInAdmin from "./components/auth/SignInAdmin";
import Dashboard from './components/page/Dashboard'
import OdaiCreate from './components/page/OdaiCreate'
import OdaiDetail from './components/page/OdaiDetail'
import OdaiEdit from './components/page/OdaiEdit'
import OdaiSearch from './components/page/OdaiSearch'
import ReportSearch from './components/page/ReportSearch'
const NotFound = () =>(
  <h1>Not Found</h1>
)

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Wrapper(Dashboard)} />
            <Route exact path='/Dashboard' component={Wrapper(Dashboard)} />
            <Route exact path='/OdaiSearch' component={Wrapper(OdaiSearch)} />
            <Route exact path='/ReportSearch' component={Wrapper(ReportSearch)} />
            <Route exact path='/OdaiCreate' component={Wrapper(OdaiCreate)} />
            <Route exact path='/OdaiDetail/:id' component={Wrapper(OdaiDetail)} />
            <Route exact path='/OdaiEdit/:id' component={Wrapper(OdaiEdit)} />
            <Route exact path='/SignIn' component={Wrapper(SignIn)} />
            <Route exact path='/SignInAdmin' component={Wrapper(SignInAdmin)} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
