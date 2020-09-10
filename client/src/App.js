import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Redirect, Switch } from "react-router-dom";
import Navigation from "./Component/Navigation";
import Home from "./Component/Home";
import Footer from "./Component/Footer";
import Landing from './Component/Landing'
import Confirm from "./Component/Confirm"
// import Spinner from './Component/Spinner'
import { API_URL } from './config'
import Notifications from 'react-notify-toast'

export default class App extends React.Component {
  state = {
    loading: true
  }

  componentDidMount = () => {
    fetch(`${API_URL}/wake-up`)
      .then(res => res.json())
      .then(() => {
        this.setState({ loading: false })
      })
      .catch(err => console.log(err))
  }

  render = () => {
    const content = () => {
      return (
        <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/Landing" exact component={() => <Landing />} />
          <Route exact path='/confirm/:id' component={Confirm} />
            <Redirect from='*' to='/'/>
        </Switch>
        <Footer />
      </Router>
    </div>
      )
    }

    return (
      <div className='container fadein'>
        <Notifications />
        <main>
          {content()}
        </main>
        
      </div>
    )
  }
}
