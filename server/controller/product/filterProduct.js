const productModel = require("../../models/productModel")

const filterProductController = async(req,res)=>{
 try{
        const categoryList = req?.body?.category || []

        const product = await productModel.find({
            category :  {
                "$in" : categoryList
            }
        })
      // 🚫 Stop Vercel + browser from caching the response
        res.set("Cache-Control", "no-store");
        res.json({
            data : product,
            message : "product",
            error : false,
            success : true
        })
 }catch(err){
    res.json({
        message : err.message || err,
        error : true,
        success : false
    })
 }
}


module.exports = filterProductController
