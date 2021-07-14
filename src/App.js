import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {BrowserRouter as Router , Switch, Route, Redirect} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Topbar from './components/Topbar/Topbar';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Copyright from './components/Copyright/Copyright';
import Packages from "./pages/Packages";
import Contact from './pages/Contact';
import './App.css';
function App() {
  return (
   <>
    <Router>
    <Topbar />
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/about" exact component={About}></Route>
      <Route path="/packages" exact component={Packages}></Route>
      <Route path="/contact" exact component={Contact}></Route>
      <Redirect exact to="/"></Redirect>
    </Switch>
    <Footer />
    <Copyright />
    </Router>
   </>
  );
}
export default App;
