//Since every function or method is async and has a try catch block, why not create a common wrapper and pass the functions to this wrapper.


const asyncHandler = (func)=>{ //this is a function which takes a function as a parameter and executes it
    return async (req, res, next)=>{
        try {
             await func(req, res, next);
        } catch (err) {
            //when status code of 510 is appeared, we know there's something wrong here.
            res.status(err.statusCode || 510).json({
                success: false,
                message: err.message
            })
        }
    }
} 
export {asyncHandler}


