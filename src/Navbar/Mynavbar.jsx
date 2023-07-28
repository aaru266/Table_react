import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Form, Button} from 'react-bootstrap';
import { Link,useSearchParams} from 'react-router-dom';

const Mynavbar = () => {
    const[,setsearch]=useSearchParams();
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
       
          <Navbar.Collapse id="responsive-navbar-nav">
            <Form className="d-flex">
              <Form.Control
              onChange={e=>setsearch({search:e.target.value})}
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
        
      </Navbar>
    );
}

export default Mynavbar