// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
// import * as getRowsFromDB from "$lib/server/database";
// const mysql = require("mysql");
// export function async load() {

import mysql from "mysql";
import * as dotenv from "dotenv"
dotenv.config();

// export const load = async () => {
export const load = new Promise((resolve,reject) => {
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
        db.query('SELECT * FROM Hack.reports', [], (err, res) => {
          if (err) {
            reject("BAD query");
          } else {
            //modify received data
            console.log("Data is:");
            console.log(res);
						// out = res;
            resolve({
              code: 69,
              data: res
            });
          }
        });
      }
    })
  });

	// return await myPromise.then(
	// 	(data) => {
	// 		console.log(`code is ${data.code}`);
	// 		return data;
	// 	}).catch((err) => {
	// 		console.log(err)
	// 	});
// });

export const actions = {
	// /**
	//  * Modify game state in reaction to a keypress. If client-side JavaScript
	//  * is available, this will happen in the browser instead of here
	//  */
	// update: async ({ request, cookies }) => {
	// 	const game = new Game(cookies.get('sverdle'));

	// 	const data = await request.formData();
	// 	const key = data.get('key');

	// 	const i = game.answers.length;

	// 	if (key === 'backspace') {
	// 		game.guesses[i] = game.guesses[i].slice(0, -1);
	// 	} else {
	// 		game.guesses[i] += key;
	// 	}

	// 	cookies.set('sverdle', game.toString());
	// },

	// /**
	//  * Modify game state in reaction to a guessed word. This logic always runs on
	//  * the server, so that people can't cheat by peeking at the JavaScript
	//  */
	// enter: async ({ request, cookies }) => {
	// 	const game = new Game(cookies.get('sverdle'));

	// 	const data = await request.formData();
	// 	const guess = (data.getAll('guess'));

	// 	if (!game.enter(guess)) {
	// 		return fail(400, { badGuess: true });
	// 	}

	// 	cookies.set('sverdle', game.toString());
	// },

	// restart: async ({ cookies }) => {
	// 	cookies.delete('sverdle');
	// }
};
