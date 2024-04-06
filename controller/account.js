const Account =require("../model/account")


const getAccount = (async (req,res) =>{
    try{
        const search = await Account.find({});
        return res.status(200).json(search)

    }catch(err){
        return res.status(500).json({success: false, error:err})
    }
    
})

const createAccount = ( async (req,res)=>{
    const newAcc = req.body
    console.log(newAcc)
    try{
        const result = await Account.create(newAcc)
        return res.status(201).json(result)
    }catch(err){
        return res.status(500).json({'success':false, 'error': err})
    }
    
})

const getAccountById = ( async (req,res) =>{
    const id = req.param('id')
    try{
        const result = await Account.findOne({_id:id});
        return res.status(200).json(result)
    }catch(err){
        return res.status(400).json({
            "Success":false,
            "id": id
            })
    }
})


const deleteAccount = ( async (req, res) =>{
    const id = req.param('id')
    try{
        await Account.findOneAndDelete({_id:id});
        return res.status(200).json({
            "Success":true,
            "id": id
            })
    }catch(err){
        return res.status(400).json({
            "Success":false,
            "id": id
            })
    }
    
})


module.exports = {getAccount, getAccountById, createAccount, deleteAccount}