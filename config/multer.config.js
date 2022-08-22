
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
    cloud_name: "djvm5caay",
    api_key: "727323979594151",
    api_secret: "_A9cveqxKCBbNg0zqtpPOx4u4Ic",
});

const storage = new CloudinaryStorage({
    //cloudinary: cloudinary,
    cloudinary,
    params: {
        
        allowed_formats: ['jpeg', 'png', 'jpg', 'mp3','wav'],
        folder: 'beatflix',
        resource_type: 'video',
    },
});


module.exports = multer({ storage });
