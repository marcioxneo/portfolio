import React from 'react'
import Home from './components/home/home'
import Contact from './components/contact/contact'
import { Container } from 'react-materialize'
import { Switch, BrowserRouter as Router } from 'react-router-dom'


function Main() {
  return (
    <main>
      <Container>
        
        <Switch>
          <Router exact path='/'>
            <Home />
          </Router>

          <Router path='/contact'>
            <Contact />
          </Router>
        </Switch>

      </Container>
      
    </main>
  )
}

export default Main