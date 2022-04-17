
//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 

//Overlap CSS
import '../datatable/table.css';
import '../datatable/styles.css';
//Navbar
import { NavDropdown } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import Mylogo from '../images/CPSN.png';

import MultiCarousel from '../Carousel/MultiItemCarousel';
import Footer from '../components/Footer';
import MultiCarousel2 from '../Carousel2/buildingcarousel';
import Register from "../components/Register";

function Database (){
    
 $(document).ready(function () {
       $('#example').DataTable();
    });   

return (
    <div>
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
                                <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Register Business</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Rent Offices</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Search Services</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
            </Navbar>

    <div className="MainDiv">

      <div class="jumbotron text-center bg-sky">
          <h3>Shilp Epitome </h3>
          <hr/>
          <h5>
                Bodakdev, Ahmedabad
          </h5>
          <p>
               An office building situated at bodakdev with more than 1000 office spaces, with a lavish location 
          </p>

      </div>
      
      <div className="container">
          <div>
          <table id="example" class="display">
            <thead>
                <tr>
                    <th>Building Name</th>
                    <th>Floor</th>
                    <th>Office No</th>
                    <th>Name of Business</th>
                    <th>Service</th>
                    <th>Contact No</th>
                    <th>Email address</th>
                    <th>Website</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Shilp Epitome</td>
                    <td>7</td>
                    <td>707</td>
                    <td>VISHVAS GLASSES</td>
                    <td>NA</td>
                    <td>NA</td>
                    <td>NA</td>
                    <td>NA</td>
                </tr>                
                <tr>
                    <td>Shilp Epitome</td>
                    <td className='black'>7</td>
                    <td className='black'>714</td>
                    <td className='black'>SAKSHI SARVESH CORPORATE</td>
                    <td className='black'>Real Estate</td>
                    <td className='black'>NA</td>
                    <td className='black'>NA</td>
                    <td className='black'>NA</td>
                </tr>                
                <tr>
                    <td>Shilp Epitome</td>
                    <td>7</td>
                    <td>722</td>
                    <td>RASHMI NGO, DOBARIA</td>
                    <td>NGO</td>
                    <td>NA</td>
                    <td>NA</td>
                    <td>NA</td>
                </tr>                                  
                <tr>
                    <td>Shilp Epitome</td>
                    <td className='black'>8</td>
                    <td className='black'>802</td>
                    <td className='black'>NPS AND ASSOCIATE</td>
                    <td className='black'>Advocate</td>
                    <td className='black'>63</td>
                    <td className='black'>NA</td>
                    <td className='black'>NA</td>
                </tr>      
                   <tr>
                    <td>Shilp Epitome</td>
                    <td>8</td>
                    <td>805</td>
                    <td>Atharva</td>
                    <td>IT</td>
                    <td>63</td>
                    <td>NA</td>
                    <td>NA</td>
                </tr>                
                <tr>
                    <td>Shilp Epitome</td>
                    <td className='black'>8</td>
                    <td className='black'>806</td>
                    <td className='black'>Atharva</td>
                    <td className='black'>IT</td>
                    <td className='black'>63</td>
                    <td className='black'>NA</td>
                    <td className='black'>NA</td>
                </tr>                
                <tr>    
                    <td>Shilp Epitome</td>
                    <td>8</td>
                    <td>807</td>
                    <td>Atharva</td>
                    <td>IT</td>
                    <td>NA</td>
                    <td>NA</td>
                    <td>NA</td>
                </tr>     
                <tr>
                    <td>Shilp Epitome</td>
                    <td className='black'>8</td> 
                    <td className='black'>809</td>
                    <td className='black'>NPS Associates and GST consultants</td>
                    <td className='black'>Tax, Law and Accounting</td>
                    <td className='black'>NA</td>
                    <td className='black'>NA</td>
                    <td className='black'>NA</td>
                </tr>
                <tr>
                    <td>Shilp Epitome</td>
                    <td>8</td> 
                    <td>812</td>
                    <td>MASKARA ENTERPRISE</td>
                    <td>NA</td>
                    <td>NA</td>
                    <td>NA</td>
                    <td>NA</td>
                </tr>
                <tr>
                    <td>Shilp Epitome</td>
                    <td className='black' >8</td> 
                    <td className='black' >815</td>
                    <td className='black'>NAMASKAR INFRA PROJECT LLP</td>
                    <td className='black'>PRIMISE MANAGEMENT</td>
                    <td className='black'>NA</td>
                    <td className='black'>NA</td>
                    <td className='black'>NA</td>
                </tr>
                <tr>
                    <td>Shilp Epitome</td>
                    <td>8</td> 
                    <td>819</td>
                    <td>CAPETOWN REIALITIES PVT LTD</td>
                    <td>NA</td>
                    <td>NA</td>
                    <td>NA</td>
                    <td>NA</td>
                </tr>
                <tr>
                    <td>Shilp Epitome</td>
                    <td className='black'>8</td> 
                    <td className='black'>820</td>
                    <td className='black'>LANCE TECH</td>
                    <td className='black'>IT</td>
                    <td className='black'>NA</td>
                    <td className='black'>NA</td>
                    <td className='black'>NA</td>
                </tr>
                <tr>
                    <td>Shilp Epitome</td>
                    <td>9</td>
                    <td>904</td>
                    <td>Woodberry</td>
                    <td>NA</td>
                    <td>NA</td>
                    <td>NA</td>
                    <td>NA</td>
                </tr>                <tr>
                    <td>Shilp Epitome</td>
                    <td className='black'>9</td>
                    <td className='black'>910</td>
                    <td className='black'>kaizen Travels</td>
                    <td className='black'>Travel Agents</td>
                    <td className='black'>8980288555</td>
                    <td className='black'>NA</td>
                    <td className='black'><a>http://www.gokaizen.in/</a></td>
                </tr>                
                <tr>
                    <td>Shilp Epitome</td>
                    <td>9</td>
                    <td>914</td>
                    <td>Aims Global Venture</td>
                    <td>Transport Services</td>
                    <td>NA</td>
                    <td>NA</td>
                    <td>NA</td>
                </tr>                <tr>
                    <td>Shilp Epitome</td>
                    <td className='black'>9</td>
                    <td className='black'>916</td>
                    <td className='black'>Mahavir Corporate- Government Contracter</td>
                    <td className='black'>Construction Management</td>
                    <td className='black'>NA</td>
                    <td className='black'>NA</td>
                    <td className='black'>NA</td>
                </tr>
   
            </tbody>
            <tfoot>
            <tr>
                    <th>Building Name</th>
                    <th>Floor</th>
                    <th>Office No</th>
                    <th>Name of Business</th>
                    <th>Service</th>
                    <th>Contact No</th>
                    <th>Email address</th>
                    <th>Website</th>
                </tr>
            </tfoot>
        </table>
          
        </div>
      </div>
  );


  </div>

  
                        <MultiCarousel/>
         

          
                        <MultiCarousel2/>
          

      
                        <Register/>
   
                             <Footer/>

  </div>
);
}

export default Database;