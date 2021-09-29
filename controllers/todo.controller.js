const TodoModel=require('../models/todo.model')
const AppError=require('../utils/AppError')

exports.create=async (req,res,next) =>{
    try {
        const userId=req.user._id;
        if(!userId){
            return next(new AppError("Please login to get access!",401))
        }
        const {title,category,complete}=req.body
        const data={
            title,
            complete,
            category,
            createdBy:userId
        }
        const newTodoList=await TodoModel.create(data)
        return res.status(201).json({
            status:"Success",
            message:"Data saved successfully!",
            data:newTodoList
        });
    } catch (error) {
        next(error);
    }
}

exports.getAllList=async(req,res,next)=>{
   try {
       const {limit,offset}=req.query;
       const userId=req.user._id;
       const type=req.user.role;
       if(!userId){
        return next(new AppError("Please login to get access!",401))
        }
        let perPage=parseInt(limit);
        console.log(typeof(perPage));
        let PageNo=limit * offset
       let todoLists;
       if(type ==="admin"){
        todoLists=await TodoModel.find().sort({createdAt:-1}).limit(perPage ? perPage:5).skip(PageNo > 0 ? PageNo:0).lean().exec()
       }else{
        todoLists=await TodoModel.find({createdBy:userId}).sort({createdAt:-1}).limit(perPage ? perPage:5).skip(PageNo > 0 ? pageNo:0).lean().exec()
       }    
       return res.status(201).json({
        status:"Success",
        data:todoLists,
        totalData:todoLists.length
        
    });   
   } catch (error) {
    next(error);
   }
}