import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import NotFound from './components/NotFound/NotFound';
import Locations from './components/Locations/Locations';

function App() {
  return (
    <div style={{ backgroundColor: '#f1f2f1' }}>
      <BrowserRouter>
        {/* Header Component */}
        <Header></Header>

        {/* All existing routes */}
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/locations">
              <Locations></Locations>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </div>

        {/* Footer Component */}
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
