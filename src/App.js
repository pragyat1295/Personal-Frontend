
import './App.css';
// import MyNav from './components/mynav';
// import Routes from './routes/routes';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
// import { Navbar, Nav, Container} from 'react-bootstrap';
import Home from './/views/home';
import About from './views/about';
import Contact from './views/contact';
import MyNav from './components/mynav';

const App = () => {
  return (
    <>
      {/* <Button variant = "Primary">Click Here</Button> */}
      {/* <Button variant="primary">Primary</Button> */}
      {/* <Button variant='primary'>Button</Button> */}

      {/* <br/> */}
      {/* <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Pragyat</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About Me</Nav.Link>
            <Nav.Link href="#pricing">Contact Me</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br/><br/>
      <h3 className='container'>Text Utils </h3>
      {/* <MyNav/> */}
      
      {/* <Routes/> *
      <Home/> */}

      <Router>
        <MyNav/>

        <main>
          <Routes>
            <Route path = '/' exact element = {(
              <Home/>
            )}/>
              
            {/* </Route> */}

            <Route path = '/about' exact 
            element = {(
              <About/>
            )}/>
              
            {/* </Route> */}

            <Route path = '/contact' exact element = {(
              <Contact/>
            )} />
              
            {/* </Route> */}

            {/* <Navigate to =  '/'/> */}
          </Routes>
        </main>
      </Router>

    </>
  );
}

export default App;
