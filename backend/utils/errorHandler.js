
class ErrorHandler extends Error{
    constructor(message,stausCode){
        super(message)
        stausCode =this.stausCode
    }

}

export default ErrorHandler