import './App.css';

// Importing Components
import Navigation  from './components/Navigation/Navigation'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact component={() => <Home />} />
        <Route path="/about" exact component={() => <About />} />
        <Route path="/contact" exact component={() => <Contact />} />
        <Redirect from="*" to="/" />
      </Switch>
      <Footer />
    </Router>
  );
}



export default App;
