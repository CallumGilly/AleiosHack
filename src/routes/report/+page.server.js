// import { fail } from '@sveltejs/kit';
import query from "$lib/server/database";

export const actions = {
	default: async (event) => {
		const data = await event.request.formData();
		const type = data.get("type-select");
		const description = data.get("description");
		const image = data.get("image");
		const location = { lat: data.get("lat"), long: data.get("long") };
		console.log(type);
		console.log(description);
		console.log(image);
		console.log(location);


		let buffer = Buffer.from(await image.text());
		try {
			query("INSERT INTO Hack.reports (Longitude, Latitude, Image, Time, Category, Description) VALUES (?, ?, ? NOW(), ?, ?);",
				[0.3, 0.4, buffer.toString('base64'), "Bob", description]
			);
		} catch (error) {
			console.error(error);
		}
	}
};

