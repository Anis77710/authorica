import app from "./src/app.js";
import ConnectDb from "./src/config/database.js";


ConnectDb();
app.listen(3000, ()=>{
    console.log("Server is running"); 
})