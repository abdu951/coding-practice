import multer from "multer"

export const store = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now()+ file.originalname)
    }
})