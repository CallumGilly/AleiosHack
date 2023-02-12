import query from "$lib/server/database";
import spawn from 'child_process';
import imageBlobReduce from "image-blob-reduce";

// import fs from "fs";
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

				// var reader = new reader.readAsDataURL(image());
				// reader.readAsDataURL(image);
				// reader.onload = function () {
				query("INSERT INTO Hack.reports (Longitude, Latitude, image, Time, Category, Description) VALUES (?, ?, ?, NOW(), ?, ?);",
					[location.long, location.lat,image.imageBlobReduce(), type, description]
				).then(() => {
					try {
						const python = spawn('python3', [process.env.HOME + "/AleiosHack/python/dtan.py"]);
						python.on("close", (code) => {
							console.log(`Python ran with code ${code}`);
						});
					} catch (err) {
							console.log("Python could not run:");
							console.log(err);
					}
				});
				// query("INSERT INTO Hack.reports (Longitude, Latitude, Image, Time, Category, Description) VALUES (?, ?, ?, NOW(), ?, ?);",
					// [location.long, location.lat, reader.result, type, description]
				// )
				// 	console.log(image);
				// }
				
				// fs.writeFileSync(process.env.HOME + "/AleiosHack/static/images/" + image.name, buffer.toString("base64"), {flag: "w"}, (err) => {
				// 	if (err) {
				// 		console.log(err);
				// 	} else {
				// 		console.log("File writen... maybe");
				// 	}
				// });
			// })
			

			// image
			// console.log(buffer.toString("base64"));
		} catch (error) {
			console.error(error);
		}

		return { success: true };
	}
};

