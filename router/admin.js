const router=require("express").Router()
const newsController = require("../controllers/NewsController")
const categoryController = require("../controllers/CategoryController");
const registrationController = require("../controllers/RegistrantionController");
const advertisementController = require("../controllers/AdController");
const subcategoryController = require("../controllers/SubCategoryController");
const middleware=require("../Middleware/Auth")
const videoController=require("../controllers/VideoController")



const multer = require("multer");

// Setting storage engine
const storageEngine = multer.diskStorage({
    destination: "./uploads",
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}--${file.originalname}`);
    },
});
//initializing multer
const upload = multer({
    storage: storageEngine,
});






//news
router.post("/addNews",upload.single("thumbail"),middleware.authenticateToken,newsController.addNews);
router.get("/getNews",middleware.authenticateToken,newsController.getNews);
router.delete("/deleteNews/:id",middleware.authenticateToken,newsController.deleteNews);
router.put("/updateNews/:id",middleware.authenticateToken,upload.single("thumbail"),newsController.updateNews);
// news



// categories
router.get("/getCategory",middleware.authenticateToken,categoryController.getCategory);
router.post("/addCategory",middleware.authenticateToken,categoryController.addCategory);
router.delete("/deleteCategory/:id",middleware.authenticateToken,categoryController.deleteCategory);
router.put("/updateCategory/:id",middleware.authenticateToken,categoryController.updatecategory);
// categories



// sub categories
router.get("/getsubCategory",middleware.authenticateToken,subcategoryController.getSubCategory);
router.post("/addsubCategory",middleware.authenticateToken,subcategoryController.addSubCategory);
router.delete("/deletesubCategory/:id",middleware.authenticateToken,subcategoryController.deleteSubCategory);
router.put("/updatesubCategory/:id",middleware.authenticateToken,subcategoryController.updateSubCategory);
// sub categories


//login
// router.post(
//     "/login",
//     registrationController.login
// );

// Registration
router.post("/addRegistration",middleware.authenticateToken,registrationController.addregistration);
router.get("/getRegistration",middleware.authenticateToken,registrationController.getregistration);
router.delete("/deleteRegistration/:id",middleware.authenticateToken,registrationController.deleteregistration);
router.put("/updateRegistration/:id",middleware.authenticateToken,registrationController.updateregistration);
// router.get("/getRegistration",registrationController.getAllregistration);
// Registration

// video
router.post("/addVideo",upload.single("thumbail"),middleware.authenticateToken,videoController.addVideo);
router.delete("/deleteVideo/:id",middleware.authenticateToken,videoController.deleteVideo);
router.put("/updateVideo/:id",upload.single("thumbail"),middleware.authenticateToken,videoController.updateVideo);
router.get("/getVideo",middleware.authenticateToken,videoController.getVideo);

// router.get("/getVideo",videoController.getAllvideo);
// video


// Advertisement
router.post("/addAdvertisement",upload.single("Content_upload"),middleware.authenticateToken,advertisementController.addAd);
router.delete("/deleteAdvertisement/:id",middleware.authenticateToken,advertisementController.DeleteAd);
router.put("/updateAdvertisement/:id",upload.single("Content_upload"),middleware.authenticateToken,advertisementController.UpdateAd);
router.get("/getAdvertisement",middleware.authenticateToken,advertisementController.getAd);
// Advertisment

module.exports= router;