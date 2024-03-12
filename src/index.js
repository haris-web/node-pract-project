import MongoDBConnection from "./db/index.js";
import  app  from "./app.js";

MongoDBConnection().then(()=>{
    app.listen(8282 ,()=>{
        console.log("app is listening");
    })
}).catch((error)=>{
  console.log(error)
})