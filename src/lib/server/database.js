import mysql from "mysql";
import * as dotenv from "dotenv"
dotenv.config();


// export const load = 
const query = (sql, data) => new Promise((resolve,reject) => {
	// getRowsFromDB((res) => {
	// 	console.log(res);
	// })
	// let myPromise = new Promise(function(myResolve, myReject) {
    const db = mysql.createConnection({
      // 	const db = createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME
    });
    // return {code: 67};
		// let out;
    db.connect((err) => {
      if (err) {
        reject(`err ${err}`);
      } else {
        db.query(sql, data, (err, res) => {
          if (err) {
            reject("BAD query");
          } else {
            //modify received data
            console.log("Data is:");
            console.log(res);
						// out = res;
            resolve(res);
          }
        });
      }
    })
  });

  export default query;