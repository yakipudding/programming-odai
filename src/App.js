import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Wrapper from "./components/layout/Wrapper";
import SignIn from "./components/auth/SignIn";
import Dashboard from './components/page/Dashboard'
import OdaiLatest from './components/page/OdaiLatest'
import OdaiCreate from './components/page/OdaiCreate'
import OdaiDetail from './components/page/OdaiDetail'
import OdaiEdit from './components/page/OdaiEdit'
import OdaiSearch from './components/page/OdaiSearch'
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
            <Route exact path='/OdaiLatest' component={Wrapper(OdaiLatest)} />
            <Route exact path='/OdaiCreate' component={Wrapper(OdaiCreate)} />
            <Route exact path='/OdaiDetail/:id' component={Wrapper(OdaiDetail)} />
            <Route exact path='/OdaiEdit/:id' component={Wrapper(OdaiEdit)} />
            <Route exact path='/OdaiSearch' component={Wrapper(OdaiSearch)} />
            <Route exact path='/SignIn' component={Wrapper(SignIn)} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
