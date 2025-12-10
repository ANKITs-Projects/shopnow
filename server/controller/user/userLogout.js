async function userLogout(req,res){
    try{
        res.clearCookie("token")
// 🚫 Stop Vercel + browser from caching the response
        res.set("Cache-Control", "no-store");
        res.json({
            message : "Logged out successfully",
            error : false,
            success : true,
            data : []
        })
    }catch(err){
        res.json({
            message : err.message || err  ,
            error : true,
            success : false,
        })
    }
}


module.exports = userLogout
