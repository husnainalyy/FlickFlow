import { v2 as cloudinary } from "cloudinary"
import fs from "fs"
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            console.log("No file path provided.");
            return null;
        }
        if (!fs.existsSync(localFilePath)) {
            console.log("File does not exist before upload attempt:", localFilePath);
            return null;
        }
        const response =await  cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
            
        })
        return response;
        
    } catch (error) {
        console.error("Error uploading to Cloudinary:", error);
        return null;
    }
    finally {
        fs.unlinkSync(localFilePath);
        
    }
}



export { uploadOnCloudinary }