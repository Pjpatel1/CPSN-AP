import PostMessage from '../models/postMessage.js';

export const getPosts = async(req,res) => {
    try {
        const postMessage= await PostMessage.find();
        const jwell=[1,2,3,4];  
        res.status(200).json(jwell);
    } 
    catch (error) {
        res.status(404).json({message:error.message});
    }
}

export const createPost = async (req,res) =>{
    const post = req.body;

    const newPost=new postMessage(post)
   try {
        await newPost.save();
        const data=[{'name':"Prasanna", 'Age': "20"}]
        res.status(201).json(data);
   } 
   catch (error)
    {
       res.status(409).json({message:error.message});
   }
}