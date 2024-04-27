import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import hotelRoute from "../api/routes/hotel.js"
import authRoute from "../api/routes/auth.js"
import userRoute from "../api/routes/user.js"
import trainRoute from "../api/routes/train.js"
import session from "express-session"
import cookieParser from "cookie-parser"
import passport from "passport"
// const OAuth2Strategy = require("passport-google-oauth2").Strategy;
import { Strategy as OAuth2Strategy } from "passport-google-oauth2";
import userDB from "../api/models/GoogleUser.js"

const app = express()
dotenv.config()



app.use(cors({
    origin :"http://localhost:3000",
    methods : "GET,POST,PUT,DELETE",
    credentials:true
}));

app.use(express.json());
  

const connect = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("Connected To MONGODB")
    } catch (error){
        throw error;
    }
};

mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected")
})


// app.get("/", (req,res)=>{
//     res.send("hello first request")
// })


app.use(session({
    secret : "123456789asdfghjkl",
    resave:false,
    saveUninitialized:true
}))

app.use(passport.initialize());
app.use(passport.session());

passport.use(
    new OAuth2Strategy({
        clientID:process.env.clientID,
        clientSecret:process.env.clientSecret,
        callbackURL:"/auth/google/callback",
        scope:["profile","email"]
    },async(accessToken,refreshTOken,profile,done)=>{
        console.log("profile",profile)
        try {
            let user = await userDB.findOne({googleId:profile.id})
            
            if(!user){  
                user = new userDB({
                    googleId:profile.id,
                    username: profile.displayName,
                    email:profile.emails[0].value,
                    image:profile.photos[0].value
                })
                // console.log(profile.id,profile.email,profile.displayName)
                await user.save();
            }

            return done(null,user)
        } catch (error) {
            // console.log("Error in google login",error)
            return done(error,null)
        }
    })
)
 
passport.serializeUser((user,done)=>{
    done(null,user);
})

passport.deserializeUser((user,done)=>{
    done(null,user);
})

//initial google oauth login

app.get("/auth/google",passport.authenticate("google",{scope:["profile","email"]}))

app.get("/auth/google/callback",passport.authenticate("google",{
    successRedirect:"http://localhost:3000",
    failureRedirect:"http://localhost:3000/login",
}))

app.get("/login/success",async(req,res)=>{

    console.log("Hi jdsnfasdjlnfasidjbfjasdbf",req.user)    

    if(req.user){
        console.log("fadsfasfasfsadf")
        res.status(200).json({mesaage:"user Login", user:req.user})
    }
    else{
        res.status(400).json({message:"Not Authorised"})
    }
})



app.use(cookieParser())

app.use("/api/hotels",hotelRoute);
app.use("/api/auth",authRoute);
app.use("/api/user",userRoute);
app.use("/api/train",trainRoute);

app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "something went wrong"
    return res.status(err.Status).json({
        success : false, 
        status : errorStatus,
        message : errorMessage,
        stack : err.stack,
    })
})

app.listen(3300, ()=>{
    connect()
    console.log("Connected To Backend.")
})