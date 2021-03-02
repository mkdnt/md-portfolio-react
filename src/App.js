import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing'
import Nav from './Nav'
import Bio from './Bio'
import Projects from './Projects'
import Footer from './Footer'
import './App.css'
import Contact from './Contact';


export class App extends Component {
  render() {
    return (
      <div className='app'>
        <header>
          <Header />
        </header>
        <nav>
          <Nav />
        </nav>
        <main>
          <Switch>
            <Route exact path='/' component={Landing}/>
            <Route exact path='/bio' component={Bio}/>
            <Route exact path='/projects' component={Projects}/>
            <Route exact path='/contact' component={Contact} />
          </Switch>
        </main>
        <Footer />
      </div>
    )
  }
}

export default App
