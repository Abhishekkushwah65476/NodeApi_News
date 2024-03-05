const Subcategory =require("../models/Sub_category")

module.exports.addSubCategory=async(req,res)=>{
    try {
        let Data = new Subcategory(req.body)
        await Data.save()
        return res.status(200).json({
            success:true,
            message:"data added successfully",
            Data:Data
        })
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message,
            Data:[]
        })
    }

}

module.exports.getSubCategory=async(req,res)=>{
    try {
        let List =await Subcategory.find({})
        if(List){
            return res.status(200).json({
                success:true,
                message:"record get successfully",
                Data:List
            })
        }else{
            return res.status(404).json({
                success:true,
                message:"record not found",
                Data:[]
            })
        }
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"internal server error",
            DATA:[]
        })
        
    }
}

module.exports.deleteSubCategory=async(req,res,next)=>{


    try{
        // console.log("Abhishek = " , req.body)
       await Subcategory.deleteOne({_id:req.params.id})
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

module.exports.updateSubCategory=async(req,res)=>{
    try {
        let obj = {
            title:req.body.title,
            category_id:req.body.category_id,
            slug:req.body.slug,
            status:req.body.status
        }
 
        let filter={_id:req.params.id}
        let productUpdate = await Subcategory.findOneAndUpdate(filter, obj, {
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



// module.exports.One=async(req,res)=>{
//     try {
//         let List =await Subcategory.find({category_id:req.params.title})
//         if(List){
//             return res.status(200).json({
//                 success:true,
//                 message:"record get successfully",
//                 Data:List
//             })
//         }else{
//             return res.status(404).json({
//                 success:true,
//                 message:"record not found",
//                 Data:[]
//             })
//         }
        
//     } catch (error) {
//         return res.status(500).json({
//             success:false,
//             message:"internal server error",
//             DATA:[]
//         })
        
//     }
// }

// module.exports.two=async(req,res)=>{
//     try {
//         let List =await Subcategory.find({category_id:req.body.category_id})
//         if(List){
//             return res.status(200).json({
//                 success:true,
//                 message:"record get successfully",
//                 Data:List
//             })
//         }else{
//             return res.status(404).json({
//                 success:true,
//                 message:"record not found",
//                 Data:[]
//             })
//         }
        
//     } catch (error) {
//         return res.status(500).json({
//             success:false,
//             message:"internal server error",
//             DATA:[]
//         })
        
//     }
// }

