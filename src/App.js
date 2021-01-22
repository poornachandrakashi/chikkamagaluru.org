// Importing CSS
import './App.css';

// Importing Shared Components
import Navigation  from './shared-components/Navigation/Navigation'
import Footer from './shared-components/Footer/Footer'

// Importing Components
import Home from './components/Home/Home'
import Explore from './components/Explore/Explore'
import Contact from './components/Contact/Contact'
import Login from './components/Login/Login'
import Services from './components/Services/Services'

//Importing Router Components from React Router Dom
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
        <Route exact path="/"  component={() => <Home />} />
        <Route path="/explore" exact component={() => <Explore />} />
        <Route path="/contact" exact component={() => <Contact />} />
        <Route path="/services" exact component={() => <Services />} />
        <Route path="/contact" exact component={() => <Home />} />
        <Route path="/signin" exact component={() => <Login />} />
        <Redirect from="*" to="/" />
      </Switch>
      <Footer />
    </Router>
  );
}



export default App;
