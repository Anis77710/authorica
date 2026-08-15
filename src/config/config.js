import dotenv from "dotenv";

dotenv.config();

if(!process.env.MONGO_URI){
    throw new Error("mongo_uri is not defined in environment properly");
}
if(!process.env.JWT_SECRET){
    throw new Error("jwt_secret is not defined in environment properly");
}

const config ={
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET
};

export default config;
