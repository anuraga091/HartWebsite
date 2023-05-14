import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from '../styles/header.css'
import Logo from '../Images/text.png';
import Image from "react-bootstrap/Image";

const Header = () => {
  return (
    <>
        <Navbar key={'md'} bg={"black"} expand={'md'} className="mb-1">
          <Container fluid>
            <Navbar.Brand href="/" className='ms-5'>
              <div className={styles.div}>
                <Image src={Logo} width={150} height={150} alt="logo"/>
                {/* <span className="text-white hart"> Hart</span> */}
              </div>
                 
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="start"
            >
              <Offcanvas.Header closeButton >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`} >
                  Hart
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3 text-white">
                  <NavDropdown
                    title="Our Product"
                    id={`offcanvasNavbarDropdown-expand-md`}
                    className='ms-5 text-white'
                  >
                    <NavDropdown.Item href={`patients`}>For You</NavDropdown.Item>
                    <NavDropdown.Item href={`doctors`}> For Doctors </NavDropdown.Item>
                    <NavDropdown.Item href={`hospitals`}>For Enterprises and Hospitals <span style={{fontSize: '9px', backgroundColor: 'orange', padding: '5px', borderRadius: '50%', fontWeight: 700}}>coming soon</span></NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="About us"
                    id={`offcanvasNavbarDropdown-expand-md`}
                  >
                    <NavDropdown.Item href="about-us" >About us</NavDropdown.Item>
                    <NavDropdown.Item href="about-team">About Team</NavDropdown.Item>
                    <NavDropdown.Item href="our-mission">Our Mission</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="blogs" className='ms-5'>
                 <div className={styles.div1}>
                  <span className="B"><a className="B" href='#about'>About</a></span>
                </div>
                </Nav.Link>
                  {/* <Nav.Link href="blogs" className='ms-5'> */}
                    {/* <div className={styles.div1}> */}
                      {/* <span className="B">Team </span>  */}
                      {/* <span style={{fontSize: '9px', backgroundColor: 'orange', padding: '5px', borderRadius: '50%', fontWeight: 700}}>coming soon</span> */}
                    {/* </div> */}
                {/* </Nav.Link> */}
                  <Nav.Link href="abdm" className='ms-5'>
                    <div className={styles.div1}>
                      <span className="A" ><a  className="A" href='ABDM.html'>ABDM</a></span>
                      {/* <span style={{fontSize: '9px', backgroundColor: 'orange', padding: '5px', borderRadius: '50%', fontWeight: 700}}>coming soon</span> */}
                    </div>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
      </Navbar>
    </>
  );
}


export default Header;
// className={styles.hart}