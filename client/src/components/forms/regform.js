import "../forms/regform.css";
import "../Services/dropdown.css"
import    Axios  from "axios";
import    axios  from "axios";
import  React, {Component, useEffect, useState} from 'react';
import Select from 'react-select';
import {Multiselect} from "multiselect-react-dropdown";
import { Fastfood } from "@material-ui/icons";

function Regform()
{
    const services = [
        { service: "IT",
          label: "IT ( Information Technology )" 
        },
        { service: "C.A.", 
          label: "CA ( Chartered Accountant )" 
        },
        { 
          service: "Real Estate", 
          label: "Real Estate" 
        }
      ];

    const [listofUsers,setLisOfUsers] = useState([])
    const [email,setEmail] = useState();
    const [phone,setPhone] = useState();
    const [comName,setCompanyName] = useState();
    const [block,setBlockNumber] = useState();
    const [officeNumber,setOfficeNumber] = useState();
    const [floorNumber,setFloorNumber] = useState();
    const [building,setBuilding] = useState();
    const [landmark,setLandmark] = useState();
    const [city,setCity] = useState();
    const [status, setStatus] = useState();
    const [state,setState] = useState();
    const [pincode,setPincode] =useState();


    const [category,setCategory] = useState(services);
 
    // const [category,setCategory] = useState(services.label);
    // const ddlHandler = (e) => {
    //     setCategory(e.label);
    //     console.log(category);
    // };

    // setCategory([...category])
   

    const postUser = () =>{
        Axios.post("http://127.0.0.1:5008/register",{
            email,
            phone,
            comName,
            status,
            block,
            officeNumber,
            floorNumber,
            building,
            city,
            state,
            pincode,
            // category
            
        }).then((response)=>{
            setLisOfUsers([
                ...listofUsers,
                {
                    email,
                    phone,
                    comName,
                    status,
                    block,
                    officeNumber,
                    floorNumber,
                    building,
                    city,
                    state,
                    pincode,
                    // category
                },
            ])
            alert('USER CREATED');
    }).catch((err)=>{
        console.log(err);
    });
    }


    return(

        <>
          <div className="form-heading">
                    SERVICE REGISTRATION
            </div>
                <div className='blur'>
                        <div className='basics'>
                        </div>

                        <div className='firm-details'>
                            <div className='label1'>
                                Enter Company Details Below
                            </div>
                            
                            <div className='sinputs'>
                                <label htmlFor="name-firm" className='label2'>Building Name</label>
                                <input 
                                type="text" 
                                id="company-name" 
                                name="company-name"
                                onChange={(e)=>{
                                    setBuilding(e.target.value)
                                }}   
                                placeholder=" Eneter the Name of your Building" 
                                className='company-name' ></input>
                            </div>

                            <div className='sinputs'>
                                <label htmlFor="office-firm" className='label2'>Floor</label>
                                <input 
                                type="number" 
                                id="office-number" 
                                name="office-number"  
                                onChange={(e)=>{
                                    setFloorNumber(e.target.value)
                                }}
                                placeholder="Floor" 
                                className='company-name' ></input>
                            </div>


                            <div className='sinputs'>
                                <label htmlFor="office-firm" className='label2'>Block</label>
                                <input 
                                type="text" 
                                id="office-number" 
                                name="office-number"
                                onChange={(e)=>{
                                    setBlockNumber(e.target.value)
                                }}  
                                placeholder="Block" 
                                className='company-name' ></input>
                            </div>


                            <div className='sinputs'>
                                <label htmlFor="office-firm" className='label2'>Office Number</label>
                                <input 
                                type="number" 
                                id="office-number" 
                                name="office-number"
                                onChange={(e)=>{
                                    setOfficeNumber(e.target.value)
                                    console.log(officeNumber);
                                }}  
                                placeholder="Office Number" 
                                className='company-name' ></input>
                            </div>

                            <div className='sinputs'>
                                <label htmlFor="office-firm" className='label2'>Status</label>
                                <input 
                                type="String" 
                                id="office-number" 
                                name="office-number"  
                                onChange={(e)=>{
                                    setStatus(e.target.Floorvalue)
                                }}
                                placeholder="Status" 
                                className='company-name' ></input>
                            </div>


                            <div className='sinputs'>
                                <label htmlFor="name-firm" className='label2'>Company Name</label>
                                <input 
                                type="text" 
                                id="company-name" 
                                name="company-name"  
                                onChange={(e)=>{
                                    setCompanyName(e.target.value)
                                }}  
                                placeholder=" Eneter the Name of your comapany" 
                                className='company-name' ></input>
                            </div>

                            
                                       
                            <div className='sinputs' >
                                <label htmlFor="email" className="label">Enter your email:</label>
                                <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                placeholder='Enter email' 
                                className='email' 
                                onChange={(e)=>{
                                    setEmail(e.target.value)}
                                 }></input>
                            </div>

                            <div className='sinputs'>
                                <label className="label">Eneter phone number:</label>
                                <input 
                                type="tel"
                                id="phone" 
                                name="phone" 
                                placeholder="123-45-678"
                                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                className="phone" 
                                onChange={
                                     (e)=>{setPhone(e.target.value)
                                     console.log(phone);}
                                }></input>
                            </div>
                            
                          

                            <div className='sinputs'>
                                <label htmlFor="name-firm" className='label2'>City</label>
                                <input 
                                type="text" 
                                id="company-name" 
                                name="company-name"
                                onChange={(e)=>{
                                    setCity(e.target.value)
                                }}   
                                placeholder="City" 
                                className='company-name' ></input>
                            </div>

                            <div className='sinputs'>
                                <label htmlFor="name-firm" className='label2'>State</label>
                                <input 
                                type="text" 
                                id="company-name" 
                                name="company-name"
                                onChange={(e)=>{
                                    setState(e.target.value)
                                }}   
                                placeholder="State" 
                                className='company-name' ></input>
                            </div>

                            <div className='sinputs'>
                                <label htmlFor="name-firm" className='label2'>Pincode</label>
                                <input 
                                type="text" 
                                id="company-name" 
                                name="company-name"
                                onChange={(e)=>{
                                    setPincode(e.target.value)
                                }}   
                                placeholder="State" 
                                className='company-name' ></input>
                            </div>

                            

                            <div className='label1'>
                                Logo And Photos
                            </div>

                
                            <div className='sinputs'>
                                <input 
                                type="file" 
                                id="myFile" 
                                name="filename" 
                                className='label3'></input>
                                <button  className='submit' placeholder='upload'>Upload</button>
                            </div>
                     </div>
                        {/* <Multiselect 
                        showArrow 
                        // isObject={false} 
                        onRemove={(e)=>{console.log(e);}} 
                        onSelect={(e)=>{
                            setCategory(e)
                            console.log(e)}}
                         
                        options={options} displayValue="label" showCheckbox={true} 
                        /> */}


                        <Multiselect 
                        showArrow 
                        // isObject={false} 
                        onRemove={(e)=>{console.log(e);}} 
                        // onSelect={(services.map((e)=>(e.service)))}
                        // onSelect={(category[Object.keys(category)])}
                        onSelect={(e)=>setCategory({...category,service:e.target.value})}
                        options={services} displayValue="label" showCheckbox={true}                         />
                        <input type="submit" className='submit1' onClick={postUser}></input>
                </div> 
                <div>
                </div>     
        </>
    )
}
export default Regform

     {/* {
                        listofUsers.map((users)=>{
                            return(
                                <>
                                <div>
                                    <h3>First Name: {users.fname}</h3>
                                    <h3>Last Name: {users.lname}</h3>
                                    <h3>Email: {users.email}</h3>
                                    <h3>Phone: {users.phone}</h3>
                                </div></>
                            )
                        })
                    } */}