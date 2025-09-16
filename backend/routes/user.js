
const express = require('express');
const zod = require('zod');
const router = express.Router();
const {authMiddleware}=require('../middleware/auth')




const signupSchema = zod.object({
        username:zod.string(),
        password:zod.string(),
        firtName:zod.string(),
        lastName:zod.string()
    })
router.post('/user/signup',async (req,res)=>{
    const {success}= signupSchema.safeParse(req.body)

    if(!success){
        return res.status(411).json({
            message:"Email not registered please register"
        })
    }
    const exsitingUser = await User.findOne({
        username:req.body.username
    })

    if(exsitingUser){
        return res.status(401).json({
            message:"Email already exists! please Login"
        })
    }
})


module.exports = router;