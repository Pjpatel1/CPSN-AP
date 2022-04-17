import axios from "axios";
import  React, {useState, useEffect} from 'react';
import '../Admin/table.css'

function Admin(){

    const [listofUsers,setLisOfUsers] = useState([])

    useEffect(()=>{
        axios.get('http://127.0.0.1:5008/getUsers')
        .then((response) =>{
            setLisOfUsers(response.data);
            console.log(response.data)
        })
    },[]);

    return(
        <>
        <div>
        <h1 className="admin">ADMIN PANEL</h1>
        <table className="rwd-table">
        <tbody>
        <tr>
        {/* <th>First Name</th> */}
        {/* <th>Last Name</th> */}
        <th>Building Name</th>
        <th>Floor</th>
        <th>Block No</th>
        <th>Office No</th>
        <th>Status</th>
        <th>Company Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>City</th>
        <th>State</th>
        <th>Pincode</th>
        <th>Service</th>
      </tr>
        {listofUsers.map((user,index)=>{
                return (
                    <tr key={index}>
                    <td data-th="Building Name">{user.building}</td>
                    <td data-th="Floor">{user.floorNumber}</td>
                    <td data-th="Block No">{user.block}</td>
                    <td data-th="Office No">{user.officeNumber}</td>
                    <td data-th="Status">{user.status}</td>
                    <td data-th="Company Name">{user.comName}</td>
                    <td data-th="Email">{user.email}</td>
                    <td data-th="Phone">{user.phone}</td>
                    <td data-th="City">{user.city}</td>
                    <td data-th="State">{user.state}</td>
                    <td data-th="Pincode">{user.pincode}</td>
                    <td data-th="Service">{user.service}</td>

                    {/* <td data-th="First Name">{user.firstName}</td> */}
                    {/* <td data-th="Last Name">{user.lastName}</td> */}
                    </tr>                 
                )
            })}
            </tbody>
            </table>
            </div>
    </>
    )
        }

export default Admin;

// if(!forms.length) return null;

// return forms.map((forms,index)=>{
//     <div key={index}>
//         <h1>{forms.firstname}</h1>
//     </div>