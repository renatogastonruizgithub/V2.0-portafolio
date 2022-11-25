const { initializeApp } = require("firebase/app");

const {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} = require("firebase/storage");
const fs = require("fs"); //lee archivos asincronos

const firebaseConfig = {
  apiKey: "AIzaSyB7ueuh52WbicixzK2ArAgxQ1KrcUD-oPQ",
  authDomain: "portafolio-ecd13.firebaseapp.com",
  projectId: "portafolio-ecd13",
  storageBucket: "portafolio-ecd13.appspot.com",
  messagingSenderId: "285148909880",
  appId: "1:285148909880:web:bdeff8fb5ca7b66161b1cd",
};

const apps = initializeApp(firebaseConfig);
const storage = getStorage(apps);

const uplpoadImagen = async (path) => {
  const metadata = {
    contentType: "image/jpeg",
  };
  const idImagen = Date.now() + "-" + Math.round(Math.random() * 1e9);

  const storageRef = ref(storage, idImagen);
  await uploadBytes(storageRef, fs.readFileSync(path), metadata).then(
    (snapshot) => {
      return snapshot;
    }
  );
  const url = await getDownloadURL(storageRef);
  return url;
};

/* const uplpoadMultipleImagen = async (req) => {
  const metadata = {
    contentType: "image/jpeg",
  };

  const array = [];
  const aa = [];
  req.path.map(async (element, i) => {
    const storageRef = ref(storage, `detalles/${element.filename}`);
    array.push(element.path);
    const a = await uploadBytes(
      storageRef,
      fs.readFileSync(array[i]),
      metadata
    );
    const url = await getDownloadURL(storageRef);
    let aux = url.split(",");
    aux.map((i) => {
      aa.push(i);
    });
  });
  console.log(aa);
  return aa;
}; me falta el donwload de url 

*/

module.exports = { apps, uplpoadImagen };
