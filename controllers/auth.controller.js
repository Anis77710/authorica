import userModel from "../models/user.model.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import config from "../src/config/config.js";


async function register(req, res) {
    try {
        const { username, email, password } = req.body;

        const isAlreadyRegisterd = await userModel.findOne({
            $or: [
                { username },
                { email }
            ]
        });

        if (isAlreadyRegisterd) {
            return res.status(409).json({ message: "Username or email already exists" });
        }

        const hashPassword = crypto.createHash("sha256").update(password).digest("hex");

        const user = await userModel.create({
            username,
            email,
            password: hashPassword
        });

        const token = jwt.sign({ id: user._id }, config.JWT_SECRET, { expiresIn: "1d" });

        return res.status(201).json({
            message: "user registered successfully",
            user: {
                username: user.username,
                email: user.email,
            },
            token
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export { register };