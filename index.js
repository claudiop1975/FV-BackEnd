import app from "./src/app.js";
import sequelize from "./src/db.js";

import  "./src/models/associations.js"

async function main(){
  try {
    await sequelize.authenticate()
    await sequelize.sync({force: false})
    app.listen(3000,);
  } catch (error) {
    console.error(error);
  }
  finally{
  console.log("Levantado en puerto 3oo0")
  }
}

main()