import './App.css';

// Importing Shared Components
//import Navigation  from './shared-components/Navigation/NewNavigation'
import Navigation  from './shared-components/Navigation/Navigation'
import Footer from './shared-components/Footer/Footer'

// Importing Components
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import CardsPage from './layouts/Cards-Page/cardsPage' 
import CardsDetailPage from './layouts/Cards-Page/cardDetailPage' 

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
        <Route path="/about" exact component={() => <About />} />
        <Route path="/contact" exact component={() => <Contact />} />
        <Route path="/services" exact component={() => <Home />} />
        <Route path="/contact" exact component={() => <Home />} />
        <Route path="/blog" exact component={() => <CardsPage />} />
        <Route path="/blog-detail" exact component={() => <CardsDetailPage />} />
        <Route path="/signin" exact component={() => <Home />} />
        <Redirect from="*" to="/" />
      </Switch>
      <Footer />
    </Router>
  );
}



export default App;
