import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav, Row, Col} from 'react-bootstrap';


function App() {
  return (
    <div className="App">
       <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Soo Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
            <Nav.Link href="#pricing">My</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'></div>

      <Container>
      <Row>
        <Col sm>
          <img src={`${process.env.PUBLIC_URL}/img/cn1.jpg`} width="100%"/>
          <h4>상품명</h4>
          <p>상품설명</p>
        </Col>
        <Col sm>
          <img src="img/cn2.jpg" width="100%"/>
          <h4>상품명</h4>
          <p>상품설명</p>
        </Col>
        <Col sm>
          <img src="img/cn3.jpg" width="100%"/>
          <h4>상품명</h4>
          <p>상품설명</p>
        </Col>
      </Row>
    </Container>

    </div>
  );
}

export default App;
