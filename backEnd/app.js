const express=require('express')
const app=express()
const mongoose=require('mongoose')
const cors=require('cors')  //cross origine resourse share
const PORT=3002

//importing model
const User=require('./model/users')
const Addfood=require('./model/food')

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:false}))

const dbURL="mongodb://localhost:27017/Foodblog"
mongoose.connect(dbURL).then(()=>{
    console.log("connected to database");
})


//login
app.post('/signin',(req,res)=>{
    User.findOne({email:req.body.email}).then((doc)=>{
        if (doc) {
            if(doc.password===req.body.password){
                res.send({message:"login successful",status:200})
            }
            else{
                res.send({message:"login unsuccessful"})

            }
        } else {
            res.send({message:"user not found"})
        }
    })
})



//signup
app.post('/signup',(req,res)=>{
    User.findOne({email:req.body.email}).then((doc)=>{
    if(doc){
        res.send({message:"user aleready existed"})
    }
    else{
        let data= new User({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        })
        data.save().then(()=>{
            res.send({message:"user created successful"});
        }).catch((err)=>{
            res.send({message:"user registration failed"});
        })
    }
    })
})


//add food 
app.post('/addfood',(req,res)=>{
    const data=new Addfood({
        title:req.body.title,
        author:req.body.author,
        imageURL:req.body.imageURL
    })
    data.save().then(()=>{
        res.send({message:"Food added successfull"});
    }).catch((err)=>{
        res.send({message:"couldn't add the food"});
    })
})

//foodlist
app.get('/food',async(req,res)=>{
try {
    const data=await Addfood.find()
    res.json(data)
} catch (error) {
    console.log(error);
}
})


// app.delete('/food/:id',(req,res)=>{
//    Addfood.deleteOne({_id:req.body._id}).then((doc)=>{
//     if(doc){
//         const f=Addfood.indexOf(doc)
//         Addfood.splice(f,1)
//         res.send(doc)
//         res.send({message:"delted successfull",status:200})
//     }
//     else{
//         res.send({message:"not found"})
//     }
//    })
// })



app.listen(PORT,()=>{
    console.log(`listening to port ${PORT}`);
})



