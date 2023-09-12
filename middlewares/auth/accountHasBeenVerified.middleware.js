export const accountHasBeenVerified = (req, res, next) => {
    if(req.user.verified){
        return next();
    }

    res.status(400).json({
        success: false,
        message:'User has not been verified'
    })
}