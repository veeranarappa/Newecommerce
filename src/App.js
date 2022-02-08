
import './App.css';
import {Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Navmenu from './Navmenu';
import Leftmenu from './Leftmenu';
import {Row, Col, Container} from 'react-bootstrap'
import Allcategories from './Products/Allcategories'
import Cart from './Cart'
import Checkout from './Checkout'
import Login from './Login'
import Register from './Register'
import Success from './Success'
import Orderinfo from './Orderinfo'
import Orderview from './Orderview'

function App() {
  return (
    <div >
       <Router>  
         <Navmenu></Navmenu>

   <div className="container-fluid">
  <Row>
    <Col xs={2}>
    <Leftmenu></Leftmenu>
    </Col>
    <Col xs={10}  className="mt-20">
    <Switch >  
      <Route path="/" component={Home} exact />  
      <Route path="/Cart" component={Cart} exact />  
      <Route path="/About" component={About} exact />  
      <Route path="/Contact" component={Contact} exact />  
      <Route path="/Allcategories" component={Allcategories} exact /> 
      <Route path="/Bread" component={Allcategories} exact />
      <Route path="/Dairy" component={Allcategories} exact /> 
      <Route path="/Fruits" component={Allcategories} exact /> 
      <Route path="/Vegetables" component={Allcategories} exact />
      <Route path="/Checkout" component={Checkout} exact />
      <Route path="/Login" component={Login} exact />
      <Route path="/Register" component={Register} exact />
      <Route path="/Success" component={Success} exact />
      <Route path="/Orderinfo" component={Orderinfo} exact />
      <Route path="/Orderview" component={Orderview} exact />
    </Switch> 
    </Col>
  
  </Row> 
</div>
  </Router>
    </div>
  );
}

export default App;
