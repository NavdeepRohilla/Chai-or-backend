// Production  ye 2 tarike hote h ..


// Ekk ye tarika h krne ka Promises se

const asyncHandler =(requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req , res , next)).catch((err) => next(err))
    }
}

export {asyncHandler}


// 2nd method to do this. Try-catch se

/*
const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res , next)
    } catch (error) {
        res.status(error.code || 500).json({
            success: false,
            message: error.message
        })
    }
}
*/