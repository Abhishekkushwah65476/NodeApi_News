const Category=require("../models/Category");

module.exports.addCategory=async(req,res)=>{
    try {
        let Data = Category(req.body)
        await Data.save()
        return res.status(200).json({
            success:true,
            message:"Record added successfully",
            Data:Data
        })
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:message.error,
            Data:[]
        })
        
    }
}

module.exports.getCategory=async(req,res,next)=>{
    try{
        //  console.log("Abhishek = " , req.body)
        let newClass=await Category.find({});
        if(newClass){

            return res.status(200).json({
                success:true,
                message:"record added successfully",
                data:newClass
            })
        }else{
            return res.status(404).json({
                success:true,
                message:"internal error",
                data:[]
            })
        }

    }catch(err){
        return res.status(500).json({
            success:false,
            message:err.message,
            data:[]
        })
    }
}

module.exports.deleteCategory=async(req,res,next)=>{


    try{
        // console.log("Abhishek = " , req.body)
       await Category.deleteOne({_id:req.params.id})
       // await newClass.save();
       return res.status(200).json({
           success:true,
           message:"record deleted successfully",
           data:[]
       })

   }catch(err){
       return res.status(500).json({
           success:false,
           message:err.message,
           data:[]
       })
   }
 
}

module.exports.updatecategory=async(req,res)=>{
    try {
        let obj = {
            title:req.body.title,
            slug:req.body.slug,
            status:req.body.status
        }
 
        let filter={_id:req.params.id}
        let productUpdate = await Category.findOneAndUpdate(filter, obj, {
            returnOriginal: false,
          });
          return res.status(200).json({
            success:true,
            message:"record updated successfully",
            data:productUpdate
        })
        
    }catch(error) {
        return res.status(500).json({
            success:false,
            message:error.message,
            data:[]
        })
        
    }
}




// module.exports.getAllcategory=async(req,res,next)=>{
//     try{
//         let newClass=await Category.aggregate([
//             {
//                 $lookup:{
//                     from:"subcategories",
//                     localField:"_id",
//                     foreignField:"category_id",
//                     as:"new subCategory"
//                 }
//             }
//         ]);
//         if(newClass){

//             return res.status(200).json({
//                 success:true,
//                 message:"record added successfully",
//                 data:newClass
//             })
//         }else{
//             return res.status(404).json({
//                 success:true,
//                 message:"internal error",
//                 data:[]
//             })
//         }

//     }catch(err){
//         return res.status(500).json({
//             success:false,
//             message:err.message,
//             data:[]
//         })
//     }
// }


// module.exports.getAllcategory=async(req,res)=>{
//     try {
//         let Data =await Category.aggregate([
//             {
//                 $lookup:{
//                     from:"subcategories",
//                     localField:"_id",
//                     foreignField:"category_id",
//                     as:"SubCategory_field"
//                 }
//             }
//         ])
//         if(Data){
//             return res.status(200).json({
//                 success:true,
//                 message:"Data found Successfully",
//                 Data:Data
//             })
//         }
//         else{
//             return res.status(404).json({
//                 success:false,
//                 message:"Data not found",
//                 Data:[]
//             })
//         }
        
//     } catch (error) {
//         return res.status(500).json({
//             success:false,
//             message:error.message,
//             Data:[]
//         })
        
//     }
// }