import { pb, type UsersResponse } from '$lib';

import { userStore } from './user.svelte';

export async function globalUserLoad() {
	console.log('globalUserLoad', pb.authStore.isValid);
	let user: UsersResponse | null = null;

	try {
		user = await userStore.load();

		return { user };
	} catch (error) {
		console.error(error);
		pb.authStore.clear();
		return { user: null, slots: [], bookings: null };
	}
}
