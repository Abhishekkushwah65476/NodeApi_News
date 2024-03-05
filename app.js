const express = require("express");
const multer  = require('multer')
const app = express();
const path = require("path")

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage })

app.use(express.static(path.resolve + '/uploads'));
app.use("/uploads", express.static(path.resolve("./uploads")));

// app.use('/uploads', express.static('uploads'));

require("dotenv/config");
const bodyparser = require("body-parser");
require("./db/database").connect();
const PORT = process.env.PORT;
const cors = require("cors");
app.use(cors());
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Controll-Allow-Headers", 'Content-Type');
    res.setHeader("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
})
app.use(bodyparser.json());
const News =require("./controllers/NewsController")
const Category = require("./controllers/CategoryController")
const Subcategory = require("./controllers/SubCategoryController")
const Ad =require("./controllers/AdController")
const Video =require("./controllers/VideoController")
const Registration =require("./controllers/RegistrantionController")
const Login = require("./controllers/LoginController")
const middlewares = require("./Middleware/Auth")



const admin=require("./router/admin")
app.use("/admin",admin)


// app.use("/", (req, res) => {
//     res.send("Server error 500");
//   });
// app.use("/getApi", (req, res) => {
//     res.send("hi, I am alive");
//   });

app.get("/UserLogin",middlewares.authenticateToken,News.getNews)

// subcategory start

// app.post("/addsubcategory",Subcategory.addSubCategory)
// app.get("/getSubCategory",Subcategory.getSubCategory)
// app.get("/one/:title",Subcategory.One)
// app.post("/two",Subcategory.two)

// subcategory end


// news  start

// app.post("/addNews",upload.single('thumbail'),News.addNews)
// app.get("/getNews",News.getNews)
// app.put("/updateNews/:id",upload.single('thumbail'),News.updateNews)
// app.delete("/DeleteNews/:id",News.deleteNews)
// app.get("/newsDetail/:id",News.newsDetail)

// news End


// app.post("/addCategory",Category.addCategory)
// app.get("/getcategory",Category.getCategory)
// app.delete("/deleteCategory/:id",Category.deleteCategory)


// news 
// app.get("/getAllsubCategory",Category.getAllcategory)
// app.post("/demo",News.newData)
// app.get("/one/:slug",News.one)
// app.post("/two",News.Two)
// app.post("/thousand",News.Thousand)
// news


// ad controller api
app.post("/addAd", upload.single('Content_upload'),Ad.addAd)
app.get("/getAd",Ad.getAd)
app.put('/updateAd/:id', upload.single('Content_upload'),Ad.UpdateAd)
app.delete('/deleteAd/:id',Ad.DeleteAd)
// ad controller api

// video controller

// app.post("/addVideo",upload.single('thumbail'),Video.addVideo)
// app.get("/getVideo",Video.getVideo)
// app.put("/updateVideo/:id",upload.single('thumbail'),Video.updateVideo)
// app.delete("/deleteVideo/:id",Video.deleteVideo)

// video controller

// registration controller
// app.post("/addUser",Registration.addregistration)
// app.get("/getUser",Registration.getregistration)
// app.put("/updateUser/:id",Registration.updateregistration)
// app.delete("/deleteuser/:id",Registration.deleteregistration)
// registration controller



// Login api Start
app.post("/addLogin",Login.addLogin)
app.get("/GetLogin",Login.getLogin)
// Login api end


app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
})
