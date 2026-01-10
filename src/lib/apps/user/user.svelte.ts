import type { AuthRecord } from 'pocketbase';

import { Collections, pb, type UsersResponse } from '$lib';

class UserStore {
	private userId: string | null = null;

	user: UsersResponse | null = $state(null);
	token: string | null = $state(null);

	avatarUrl = $derived(this.user?.avatar ? pb?.files.getURL(this.user, this.user.avatar) : null);

	set(user: UsersResponse) {
		this.user = user;
	}

	async load() {
		const res = await pb.collection(Collections.Users).authRefresh();
		this.userId = res.record.id;
		return res.record as UsersResponse;
	}

	async subscribe() {
		if (!this.userId) return;

		return pb.collection(Collections.Users).subscribe(this.userId, (e) => {
			switch (e.action) {
				case 'update':
					pb.authStore.save(pb.authStore.token, e.record as AuthRecord);
					break;
				case 'delete':
					pb.authStore.clear();
					break;
			}
		});
	}

	unsubscribe() {
		if (!this.userId) return;

		pb.collection(Collections.Users).unsubscribe(this.userId);
	}

	clear() {
		this.userId = null;
		this.user = null;
		this.token = null;
	}
}

export const userStore = new UserStore();
