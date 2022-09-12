import express, {request,response} from "express";
import mongoose from "mongoose";
import userModel from "./module.js";
const CONNECTION_STRING ="mongodb://127.0.0.1:27017/userModel?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.4"
const app = express();

app.use(express.json());

app.use("/createuser", async (request, response) => {
    var data = await userModel.insertMany({
      Name: request.body.Name,
      Address:request.body.Address,
      Email:request.body.Email,
      Password:request.body.Password,
      Age: request.body.Age,
      })
if(data){
    response.status(200).json(data);
}else{
    response.status(200).json({message:"error"});
}
  });
  
 app.use("/updateone", async (req, res) => {
    try {
      let data = await userModel.updateMany(
        { Name: req.body.Name },
        { $set: {Age: req.body.Age},
        }
      );
      
      res.status(200).json(data);
    } catch (error) {
      res.status(401).json(error.message);
    }
  });
  app.use("/delete", async (req, res) => {
    try {
      let data = await userModel.remove(
        { Name: req.body.Name }
         
      );
      
      res.status(200).json(data);
    } catch (error) {
      res.status(401).json(error.message);
    }
  });
     

mongoose.connect(CONNECTION_STRING).then(() => {
    app.listen(4040, () => {
    console.log("App is running ...");
    });


  })

  .catch((error) => {
    console.log(error);
  });