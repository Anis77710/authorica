import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {

        username:{
            type:  String,
            required : [true, "usermust be required"],
            unique : [true, "username must be unique"],
        
        },
        
        email:{
            type: String,
            required: [true, "Email is reuqired"],
            unique: [true, "Must be unique"]
        },
        
        password:{
            type: String,
            required: [true, " Password is required"],
        }
    }
);

const userModel =mongoose.model("Users", userSchema);

export default userModel;