const adminService = require("../services/admin.service");

// all user
module.exports.AllUser = async(req, res) =>{
    try {
        const users = await adminService.allUser();

        if(!users){
            return res.status(404).json({message: "Users not Found !!"});
        }

        return res.status(200).json({message: "All Users Fetch Successfully", users});
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}