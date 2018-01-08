export const USER_SET = 'USER_SET';

export const setUser = (user) => {
	return {
		type: USER_SET,
		payload: {
			user
		}
	}
}