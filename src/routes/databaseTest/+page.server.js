// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
import mysql from "mysql";
// const mysql = require("mysql");
export const load = ({ cookies }) => {
	return {Data: "Callums Data"};
	const db = mysql.createConnection({
// 	const db = createConnection({
		host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
	});
	db.connect((err) => {
		if (err) {
			console.error("Could not connect to database");
		} else {
			db.query('SELECT * FROM *', [], (err, res) => {
				if (err) {
					console.error("BAD REQUEST");
				} else {
					//modify received data
					return {res}
				}
			});
			return new Error("Could not get data, probably Callums fault");
		}
	})
	 
	
};

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
