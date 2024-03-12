import mongoose from "mongoose"
const MongoDBConnection = async () => {
try 
{
    const dbInstance = await mongoose.connect("mongodb://localhost:27017")
    console.log("the connection is established");
    
} catch (error) {
    console.log("Couldn't connect", error);
}

}
export default MongoDBConnection;