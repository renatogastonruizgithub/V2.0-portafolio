const { initializeApp } = require("firebase/app");
const {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  getStream,
} = require("firebase/storage");
const { readFileSync } = require("node:fs"); //lee archivos asincronos
const { allowedNodeEnvironmentFlags } = require("node:process");

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
  //id de imagen distinto
  const idImagen = Date.now() + "-" + Math.round(Math.random() * 1e9);

  const storageRef = ref(storage, idImagen);
  await uploadBytes(storageRef, readFileSync(path), metadata).then(
    (snapshot) => {
      return snapshot;
    }
  );

  const url = await getDownloadURL(storageRef);
  return url;
};

module.exports = { apps, uplpoadImagen };
