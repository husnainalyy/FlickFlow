import { Router } from "express";
import { registerUser } from "../controllers/user.controllers.js";
import {upload} from "../middlewares/multer.middlewear.js"


const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 2
        }, 
        {
            name: "coverImage",
            maxCount: 2
        }
    ]),
    registerUser
    )


export default router