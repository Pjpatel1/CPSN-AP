import Mylogo from '../images/CPSN.png'
import '../components/home.css';


function footer ()
{
    return(

<div className="footerhome">
        <div className="logo">
        <img class="logoimage" src={Mylogo} alt="logoimage"/>
        <br/>
              <h2> CPSN is website providing all services for commercial buildings<br/> 
              <br/></h2>  
   


        </div>
        <div className="footerdata">
                <i class="fa fa-facebook"></i>  
                <i class="fa fa-instagram"> </i>
                <i class="fa fa-twitter"> </i>
        </div>



</div>
    );
}
export default footer;