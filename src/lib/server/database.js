import mysql from "mysql";
import * as dotenv from "dotenv"
dotenv.config();

export async function getRowsFromDB() {
  return new Promise(function(myResolve, myReject) {
    const db = mysql.createConnection({
      // 	const db = createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME
    });
    // return {code: 67};
    db.connect((err) => {
      if (err) {
        console.error(`err ${err}`);
      } else {
        db.query('SELECT * FROM Hack.reports', [], (err, res) => {
          if (err) {
            console.error("BAD REQUEST");
          } else {
            //modify received data
            console.log("Data is:");
            console.log(res);
            myResolve({
              code: 69,
              data: res
            });
          }
        });
        return new Error("Could not get data, probably Callums fault");
      }
    })
  });

  // return {Data: "Callums Data"};
  
}