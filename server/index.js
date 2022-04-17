import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import PostRoutes from './routes/posts.js';
import  validator  from 'validator';

const app = express();

var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(cors());

const CONNECTION_URL ="mongodb://localhost:27017/apf";

const PORT = 5008;

mongoose.connect(CONNECTION_URL)
.then(() => app.listen(PORT,() => console.log(`Connection successfull at port number: ${PORT}`)) )
.catch((error)=> console.log(error.message));

//Schema
const userSchema = new mongoose.Schema({
    
    // firstName: {
    //     type: String,
    //     required: true,
    //   },
    //   lastName: {
    //     type: String,
    //     required: true,
    //   },
    building:{
        type:String,
        required:true
    },
    floorNumber:{
        type:Number,
        default:"NA",
        required:true
    },
    block:{
        type:String,
        default:'NA',
    },
    officeNumber:{
        type:Number,
        default:"NA",
        required:true
    },
    status:{
        type:String,
        default:'Unoccuiped',
        enum:['Occupied','Unoccuiped']
    },
    comName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        default:"NA",
        trim: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error(`${value} is inValid`)
            }
        }
    },
    phone: {
        type: String,        
        required: true,
        default:"NA", 
        trim: true,       
        validate: {             
        validator: function(v) {       
        return /^[0-9]{10}$/.test(v);
        },
        message: '{VALUE} is not a valid phone number!'
        }         
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        required:true,
    },
    // landmark:{
    //     type:String,
    //     default:"NA",
    //     required:true
    // },
    // service:{
    //     type:Array,
    //     "default":[]
    // }
    service:[{
        type:String,
        "default":[]
    }]
})

//Model
const  tableData = new mongoose.model("Table", userSchema);

// REACT --- MONGODB
app.post('/register', jsonParser, 
function (req, res) {

const createDocument = async()=>{
    try{
        const data = new tableData({
            building:eval(req.body).building,
            floorNumber:eval(req.body).floorNumber,
            block:eval(req.body).block,
            officeNumber:eval(req.body).officeNumber,
            status:eval(req.body).status,
            comName:eval(req.body).comName,
            email:eval(req.body).email,
            phone:eval(req.body).phone,
            city:eval(req.body).city,
            state:eval(req.body).state,
            pincode:eval(req.body).pincode,
            service:[(eval(req.body)).service]
            // firstName : eval(req.body).firstName,
            // lastName : eval(req.body).lastName,            
            // landmark:eval(req.body).landmark,   
        })
        const result = await tableData.insertMany(data);
        console.log('CREATE DOCUMENT');
        console.log(result);     
        // console.log(req.body);   
    }
    catch(e){
          console.log(e);
      }

    }
    createDocument();
})


// app.post('/register', jsonParser, 
// function (req, res) {

// const createDocument = async()=>{
//     let {building,floorNumber,block,officeNumber,status,comName,email,phone,city,state,pincode} = req.body;
    
//     try{
//         const data = new tableData({
//             building,
//             floorNumber,
//             block,
//             officeNumber,
//             status,
//             comName,
//             email,
//             phone,
//             city,            
//             state,
//             pincode,
//             service
            
//             // firstName : eval(req.body).firstName,
//             // lastName : eval(req.body).lastName,            
//             // landmark:eval(req.body).landmark,   
//         })
//         const result = await data.save();
//         res.status(200).json({
//             status: 'Success',
//             data : data
//           })
//         // console.log('CREATE DOCUMENT');
//         console.log(result);        
//     }
//     catch(err){
//         console.log(err)
//         next(err)
//       }

//     }
//     createDocument();
// })






// app.get('/getUsers',(req,res)=>{
//     tableData.find({},(err,result)=>{
//         if(err){
//             res.json(err)
//         }
//         else{
//             res.json(result);
//         }
//     })
// })


//Ii will add only via postman. Not from React Input
// app.post('/register',async(req,res)=>{
//     const users = req.body;
//     const newUsers = new tableData(users);
//     await newUsers.save();  
//     res.json(users);
//     })
    
//MONGODB ---> REACT
app.get('/getUsers',jsonParser,function (req,res) {
    const getDocument = async () =>{
        try{
        const result1 = await tableData.find().sort({"officeNumber":1});
        console.log('PRINT DOCUMENT');
        console.log(result1);
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(result1));    
        }
        catch(err){
            console.log(err);
        }
    }
    const updateDocument = async () =>{
        try{
            await tableData.updateMany({block:""},{block:"NA"});
            await tableData.updateMany({email:""},{email:"NA"});
            await tableData.updateMany({phone:""},{phone:"NA"});
        }
        catch(err){
            console.log(err);
        }
    }
    getDocument();
    updateDocument();
})



