var express = require('express')

var admin = require("firebase-admin");
var serviceAccount = "prueba.json";
var bodyParser = require('body-parser');
var app = express()

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://tiendakawai-13774.firebaseio.com"
});

let db = admin.firestore();

app.use(bodyParser.json());
router = express.Router();

router.get('/listar', function(req,res){
  var datos=[];
    const coleccion = db.collection('usuarios');
    let Datos = collection.get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        datos.push(doc.data());
      });
      res.json({
          status:200,
          datos,
          message:"consulta realizada con exito"
      });

    })
    .catch(err => {
      console.log('erro gettings documents' ,err);
    });

});

router.post('/crear',function(req,res){
  db.collection('usuarios').add({
  clave: req.body.clave,
  correoElectronico: req.body.correo
}).then(function(docRef){
  res.json({
    status:200,
    data:docRef.id,
    message:"Datos insertados con exito"
});
}).catch(function(error){
  res.json({
    status:404,
    message:"Error al ingresar los datos"
});
});
});

app.use('/api', router);
const port = 3000;


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
