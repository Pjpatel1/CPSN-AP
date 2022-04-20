import SearchBar from "../components/SearchBar";
import SearchBar2 from "../components/SearchBar2";

import React from "react";
import BookData from "../components/Data.json";
import buildata from "../components/building.json";
import Mylogo from '../images/CPSN.png';

import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import MultiCarousel from '../Carousel/MultiItemCarousel';
import Footer from '../components/Footer';
import MultiCarousel2 from '../Carousel2/buildingcarousel';
import Register from "../components/Register";
import '../components/SearchBar.css';
function Home ()
{

    
    return(
        
        /* Home-page*/
                   
           <div className ="Main">      
                {/*Nav bar  */}
           

            {/* Main 1st page of Website */}

            <div className="Mainpage">
            <Navbar>
            <Container>
                <Navbar.Brand>
                    <div className="imagelogo">
                    <img style={{width:"100px"}} src={Mylogo} alt="Logo" /></div>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                    <Nav className="me-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#link">Services</Nav.Link>    
                        <Nav.Link href="#link">Register</Nav.Link>    
                        </Nav>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
            </Navbar>
                        <h1>Connecting Professional Services Nearby</h1>
                                             <div className="Search-box">
                                             <SearchBar className="name" placeholder="Search for a Building.." data={buildata} />
                                             </div>
                                            <h2 className="Or">Or</h2>
                                             <div className="Search-box2">
                                             <SearchBar2 className="name" onClick="passval()" placeholder="Search for a Service.." data={BookData} />
                                             </div>
            </div>

            <section>

                    <div className='calculation'>
                        <div className='calculationservices'>
                            
                        </div>

                        <div className='featuredservices'>

                        </div>


                    </div>



            </section>


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