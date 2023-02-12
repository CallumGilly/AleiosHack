// import { fail } from '@sveltejs/kit';

export const actions = {
	default: async (event) => {
		const data = await event.request.formData();
		const type = data.get("type-select");
		const description = data.get("description");
		const image = data.get("image");
		// if (description === "") {
		// 	return fail(400, { description, missing: true });
		// }
		console.log(type);
		console.log(description);
		console.log(image);
	}
};
