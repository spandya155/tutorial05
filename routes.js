var express = require('express');
var router = express.Router();
var mobile = require('./Models/mobiles')

//to fetch movies
router.get('/mobile',async(req,res)=>{
    const imobile = await mobile.find()
    res.send(imobile)
})

//to add the movies
router.post("/mobile",async(req,res)=>{
    const imobile = new mobile({
        name:req.body.name,
        price:req.body.price
    })

    await imobile.save((err,msg)=>{
        if(err){
            res.status(500).json({
                "error":err
            })
        }
        else{
            res.status(200).json({
                "My-message":msg
            })
        }
    })

})


// api for updating movie

router.patch('/mobile/:id',async (req,res)=>{
    const imobile = await mobile.findOne({_id:req.params.id})
    imobile.name = req.body.name
    imobile.price = req.body.price
    await imobile.save((err,msg)=>{
        if(err){
            res.status(500).json({
                error:err
            })
        }
        else{
            res.status(200).json({
                msg:msg
            })
        }
    })

})

//delete api

router.delete("/mobile/:name",async(req,res)=>{
    await mobile.deleteOne({name:req.params.name},(err,msg)=>{
        if(err){
            res.status(500).json({
                error:err
            })
        }
        else{
            res.status(200).json({
                msg:msg
            })
        }

    })
})

module.exports = router 