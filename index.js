const mongoose = require("mongoose");
const app = require("./app");
// Puerto para node
const port = process.env.PORT || 3977;
const { API_VERSION, IP_SERVER, PORT_DB } = require("./config");

mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

// Conexión con la base de datos de Mongo
mongoose.connect(
  `mongodb://${IP_SERVER}:${PORT_DB}/basededatosdeprueba`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, res) => {
    if (err) {
      console.log("Error.");
      throw err;
    } else {
      console.log("Conexión exitosa a la base de datos.");

      app.listen(port, () => {
        console.log("###############################");
        console.log("#########  API REST  ##########");
        console.log("###############################");
        console.log(`http://${IP_SERVER}:${port}/api/${API_VERSION}/`);
      });
    }
  }
);
