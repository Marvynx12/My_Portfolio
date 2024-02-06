import About from './components/About';
import EmailForm from './components/Email';
import Home from './components/Home';
import Projects from './components/Projects';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ParticlesBackground from './components/particlesBackground';

function App() {
  return (
    
    <Router>
      <div className="App">
      <Navbar />
      
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
              <About />
              <Projects />
              <EmailForm />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
