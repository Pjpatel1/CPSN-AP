import SearchBar from "../components/SearchBar";
import SearchBar2 from "../components/SearchBar2";

import BookData from "../components/Data.json";
import buildata from "../components/building.json";
import Mylogo from '../images/CPSN.png';
import { NavDropdown } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import MultiCarousel from '../Carousel/MultiItemCarousel';
import Footer from '../components/Footer';
import MultiCarousel2 from '../Carousel2/buildingcarousel';
import Register from "../components/Register";

//Avi
import {LinkContainer} from 'react-router-bootstrap'

function Home ()
{
    return(
        
        /* Home-page*/
                   
           <div className ="Main">      
                {/*Nav bar  */}
            <Navbar>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={Mylogo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                    <Nav className="me-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#link">Services</Nav.Link>    
                            <NavDropdown
                                id="nav-dropdown-example"
                                title="Login/Register"     
                            >
                                <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                                <NavDropdown.Item href="/regform">Register Business</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Rent Offices</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Search Services</NavDropdown.Item>
                                <NavDropdown.Item href="/admin">Admin</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
            </Navbar>

            {/* Main 1st page of Website */}

            <div className="Mainpage">

                        <h1>Connecting Professional Services Nearby</h1>
                                             <div className="Search-box">
                                             <SearchBar placeholder="Search for a Building.." data={buildata} />
                                             </div>
                                            <h2 className="Or">Or</h2>
                                             <div className="Search-box2">
                                             <SearchBar2 placeholder="Search for a Service.." data={BookData} />
                                             </div>
            </div>
            <section>
                        <MultiCarousel/>
            </section> 

            <section>
                        <MultiCarousel2/>
            </section> 


            <section>
                        <Register/>
            </section> 

                             <Footer/>
           
        </div>     
    
    );
}
export default Home;