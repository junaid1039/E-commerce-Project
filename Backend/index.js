const port = 5000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const jwt = require('jsonwebtoken');

app.use(express.json());
app.use(cors());

// Database connection with MongoDB
mongoose.connect('mongodb://localhost:27017/e-commerce')
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Failed to connect to MongoDB", err));

// API creation
app.get('/', (req, res) => {
    res.send('Express app is running');
});

// Image storage
const storage = multer.diskStorage({
    destination: './upload',
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });

// Upload endpoint for images
app.use('/images', express.static('upload'));
app.post('/upload', upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
});

// Schema for creating products
const productSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    newprice: {
        type: Number,
        required: true,
    },
    oldprice: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean,
        default: true,
    }
});

const Product = mongoose.model('Product', productSchema);

app.post('/addproduct', async (req, res) => {
    let products = await Product.find({});
    let id;
    if (products.length > 0) {
        let last_product = products[products.length - 1];
        id = last_product.id + 1;
    } else {
        id = 1;
    }
    try {
        const product = new Product({
            id: id,
            name: req.body.name,
            image: req.body.image,
            category: req.body.category,
            newprice: req.body.newprice,
            oldprice: req.body.oldprice,
        });

        console.log(product);
        await product.save();
        console.log('Saved');
        
        res.json({
            success: true,
            name: req.body.name,
        });
    } catch (error) {
        console.error("Error saving product:", error);
        res.status(500).json({
            success: false,
            message: 'Failed to save product',
        });
    }
});

//creating api to delete the products

app.post('/removeproduct',async (req,res)=>{
    await Product.findOneAndDelete({id:req.body.id})
    console.log('Removed');
    res.json({
        success:true,
        name:req.body.name
    })
});

//here i am creating api to get all products

app.get('/allproducts', async (req,res)=>{
    let products = await Product.find({});
    console.log("All products fetched");
    res.send(products);
})

// creating schema for user model

const Users = mongoose.model('User',{
    name:{
        type:String,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    }
});

//creating endpoint for registering user

app.post('/signup', async (req, res) => {
    try {
        // Check if the user already exists
        let check = await Users.findOne({ email: req.body.email });
        if (check) {
            return res.status(400).json({ success: false, errors: 'User Already Exists' });
        }

        // Initialize an empty cart
        let cart = {};
        for (let i = 0; i < 300; i++) {
            cart[i] = 0;
        }

        // Create new user without password hashing
        const user = new Users({
            name: req.body.username,
            email: req.body.email,
            password: req.body.password, // No hashing applied here
            cartData: cart,
        });

        // Save the user in the database
        await user.save();

        // Generate JWT token
        const data = {
            user: {
                id: user.id
            }
        };
        const token = jwt.sign(data, 'secret_ecom');

        // Send response with token
        res.json({ success: true, token });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

// creating sign in endpoint

app.post('/login',async (req,res)=>{
 let user = await Users.findOne({email:req.body.email});
 if(user){
    const passCompare = req.body.password === user.password;
    if(passCompare){
        const data={
            user:{
                id:user.id
            }
        }
        const token = jwt.sign(data,'secret_ecom');
        res.json({success:true,token});
    }
    else{
        res.json({success:false,errors:'Wrong Password'});
    }
 }
 else{
    res.json({success:false,errors:"Wrong Email"});
 }
});

// endpoint for New collection products
 app.get('/newcollections', async (req,res)=>{
    let products = await Product.find({});
    let newcollection = products.slice(1).slice(-8);
    console.log('Newcollection produts');
    res.send(newcollection);
 });

 //creating popular products
 app.get('/popular', async (req,res)=>{
    let products = await Product.find({category:"women"});
    let popular = products.slice(0,4);
    res.send(popular);
 });

 //middleware to fetch user

 const fetchUser = async (req,res,next)=>{
    const token = req.header('auth-token');
    if(!token){
        return res.status(401).send({errors:"Please authenticate using valid token"});
    }
    else{
        try{
            const data = jwt.verify(token,'secret_ecom');
            req.user = data.user;
            next();
            }catch(error){
                res.status(401).send({erros:'Please authenticate using valid token'})
        }
    }
 }

 //cartitems of user
 app.post('/addtocart',fetchUser,async (req,res)=>{
    let userdata = await Users.findOne({_id:req.user.id});
    userdata.cartData[req.body.itemId] +=1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userdata.cartData});
    res.send("Added");
 })
//to remove product form userdata

app.post('/removefromcart',fetchUser,async (req,res)=>{
    let userdata = await Users.findOne({_id:req.user.id});
    if(userdata.cartData[req.body.itemId]>0){
    userdata.cartData[req.body.itemId] -=1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userdata.cartData});
    res.send("Removed");
    }
});

//creating endpont to show user carts

app.post('/getcart',fetchUser, async (req,res)=>{
    console.log("getcart");
    let userdata = await Users.findOne({_id: req.user.id});
    res.json(userdata.cartData);
});

app.listen(port, (error) => {
    if (!error) {
        console.log("Server is running on port " + port);
    } else {
        console.log("Error: " + error);
    }
});
