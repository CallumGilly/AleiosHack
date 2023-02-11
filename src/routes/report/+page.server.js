import { fail } from '@sveltejs/kit';

export const actions = {
	default: async (event) => {
		const data = await event.request.formData();
		const description = data.get("description");
		if (description === "") {
			return fail(400, { description, missing: true });
		}
		console.log(description);
	}
};
