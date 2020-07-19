/* eslint-disable no-unused-expressions */
import React, {Component} from 'react';
import './App.css';
import Home from './Pages/Home';
import Profile from './Pages/Profile';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      logged_in: true,
      first_name:'',
      profile_pic_url:''
    }
  }

  render(){
    const {logged_in, first_name, profile_pic_url} = this.state;
   
    return(
      <Router>
        <Switch>
          <Route exact path="/profile">
            {
              logged_in ? 
              <Profile first_name={first_name} profile_pic_url={profile_pic_url} /> :
              null
            }
          </Route> 
          <Route path="/">
            <Home 
              setLogin={(first_name, profile_pic_url) => {
                this.setState({logged_in:true, first_name, profile_pic_url});
                // this.context.history.push("/profile");
              }} 
            />
          </Route>
        </Switch>
    </Router>
  );
  }
}

export default App;
