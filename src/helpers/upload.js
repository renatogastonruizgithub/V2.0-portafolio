const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../public/uploads"), //si no esta crea la carpeta

  filename: (req, file, cb) => {
    let extArray = file.mimetype.split("/"); //divide en strings y le saca el caracter /
    let extension = extArray[extArray.length - 1];
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + "." + extension);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
