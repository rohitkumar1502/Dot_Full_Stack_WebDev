// auth, isStudent, isAdmine

const jwt = require("jsonwebtoken");

exports.auth = (req, res, next) =>{
    try{
        console.log("cookies", req.cookies.token);
        console.log("body", req.body.token);
        console.log("Authorization", req.header("Authorization"));
        // Exctracting JWT token
        const token = req.body.token || req.cookies.token || req.header("Authorization").replace("Bearer ", "");
        if(!token || token === undefined){
            return res.status(401).json({
                message: "Token is missing",
                success: false
            })
        }

        //verify the token
        try{
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decode);
            req.user = decode;
    

        }catch(err){
            return res.status(401).json({
                message: "error in verifying the token",
                success: false
            })
        }
        next();

    }catch(error){
        return res.status(401).json({
            message: "Error in auth middleware",
            success: false
        })
    }

}

exports.isStudent = (req, res, next) =>{
    try{
        if(req.user.role !== 'student'){
            return res.status(401).json({
                success: false,
                message: "This is protected route for the student "
            })
        }

    }catch(err){
        return res.status(500).json({
            message: "Error is isStudent verification",
            success: false
        })
    }
    next();
}
exports.isAdmin = (req, res, next) =>{
    try{
        if(req.user.role !== 'admin'){
            return res.status(401).json({
                success: false,
                message: "This is protected route for the admin"
            })
        }

    }catch(err){
        return res.status(500).json({
            message: "Error is isAdmin verification",
            success: false
        })
    }
}