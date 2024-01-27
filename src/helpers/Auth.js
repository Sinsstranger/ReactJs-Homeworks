class AuthHelper {
	static isAuth = 'isAuth';

	static token = 'token';

	constructor() {
		this.isAuth = false;
		this.token = null;
	}

	getToken() {
		return this[AuthHelper.token] || null;
	}

	setToken(token) {
		this[AuthHelper.token] = token;
	}

	getIsAuth() {
		return this[AuthHelper.isAuth] || false;
	}

	setIsAuth(isAuth) {
		this[AuthHelper.isAuth] = isAuth || false;
	}

	save() {
		Object.assign(sessionStorage, {
			isAuth: this[AuthHelper.isAuth],
			token: this[AuthHelper.token],
		});
	}

	clean() {
		try {
			this[AuthHelper.isAuth] = false;
			this[AuthHelper.token] = null;
			sessionStorage.removeItem(AuthHelper.isAuth);
			sessionStorage.removeItem(AuthHelper.isAuth);
			return true;
		} catch (e) {
			return false;
		}
	}
}

export default new AuthHelper();
