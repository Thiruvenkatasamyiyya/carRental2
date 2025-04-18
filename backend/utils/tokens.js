
export const sendToken = async (user,statusCode,res) =>{

    const token = await user.getTokens()
    const option ={
        expires : new Date(
            Date.now() + 7 * 24 * 60 * 60 * 1000
        ),
        httpOnly : true
        
    }

    res.status(statusCode).cookie("token",token,option).json({
        token
    })
}