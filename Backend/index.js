const port = 6000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const multer = require('multer');
const path = require('path');
const cors = require('cors');

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

app.listen(port, (error) => {
    if (!error) {
        console.log("Server is running on port " + port);
    } else {
        console.log("Error: " + error);
    }
});
