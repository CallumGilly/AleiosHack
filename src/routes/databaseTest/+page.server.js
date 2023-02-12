// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
// import * as getRowsFromDB from "$lib/server/database";
// const mysql = require("mysql");
// export function async load() {



	// return await myPromise.then(
	// 	(data) => {
	// 		console.log(`code is ${data.code}`);
	// 		return data;
	// 	}).catch((err) => {
	// 		console.log(err)
	// 	});
// });

import query from "$lib/server/database";

export const load = async () => {
	let dbResponse = await query('SELECT * FROM Hack.reports', []);
	// let cleanData = [];
	// for (let index = 0; index < dbResponse.length; dbResponse++) {
	// 	console.log(`dbResponse`);
	// 	console.log(dbResponse[index].RowDataPacket);
	// 	cleanData[index] = dbResponse[index].RowDataPacket;
	// }
	
	// console.log(cleanData);
	return {arr: JSON.parse(JSON.stringify(dbResponse))};
	}

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
