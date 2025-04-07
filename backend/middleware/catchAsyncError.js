export default (computeFunction)=>(req,res,next)=>{
    Promise.resolve(computeFunction(req,res,next)).catch(next)
}