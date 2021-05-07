import React from "react";
import { Route } from 'react-router-dom'
import GreetingContainer from './greeting_container'
import LoginFormContainer from "./login_form_container";
import SignUpFormContainer from "./signup_form_container";
import {AuthRoute} from '../util/route_util'
import BenchIndexContainer from './bench_index_container'
const App = () => (
  <div>
    <header>
      <h1>Bench BnB</h1>
      <GreetingContainer/>
    </header>

    <Route exact path="/" component={BenchIndexContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignUpFormContainer} />
  </div>
);

export default App;