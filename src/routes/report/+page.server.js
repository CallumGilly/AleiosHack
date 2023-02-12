import query from "$lib/server/database";
import fs from "fs";
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

		// let reader = new FileReader();
		// reader.readAsDataURL(image);
		// let buffer = Buffer.from(await image.text());
		try {
			// reader.onload(() => {
				query("INSERT INTO Hack.reports (Longitude, Latitude, Image, Time, Category, Description) VALUES (?, ?, ?, NOW(), ?, ?);",
					[location.long, location.lat, image.name, type, description]
				);
				fs.writeFileSync(process.env.HOME + "/]AleiosHack/static/images/" + image.name, JSON.stringify("Test"), {flag: "w"}, (err) => {
					if (err) {
						console.log(err);
					} else {
						console.log("File writen... maybe");
					}
				});
			// })
			

			// image
			// console.log(buffer.toString("base64"));
		} catch (error) {
			console.error(error);
		}

		return { success: true };
	}
};

