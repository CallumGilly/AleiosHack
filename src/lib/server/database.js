import mysql from "mysql";
import * as dotenv from "dotenv"
dotenv.config();

const query = (sql, data) => new Promise((resolve,reject) => {
    const db = mysql.createConnection({
      // 	const db = createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME
    });

    db.connect((err) => {
      if (err) {
        reject(`Connection error`);
      } else {
        db.query(sql, data, (err, res) => {
          if (err) {
            reject("BAD query");
          } else {
            resolve(res);
          }
        });
      }
    })
  });

  export default query;