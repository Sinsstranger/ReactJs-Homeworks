/* eslint-disable lines-between-class-members,class-methods-use-this */
import bcrypt from 'bcryptjs';

class AuthHelper {
	static isAuth = 'isAuth';

	static token = 'token';

	constructor() {
		this.isAuth = sessionStorage.getItem(AuthHelper.isAuth) || false;
		this.token = sessionStorage.getItem(AuthHelper.token) || null;
	}
	#genSalt(rounds = 10) {
		return bcrypt.genSaltSync(rounds);
	}

	genPasswordHash(password) {
		if (!password || typeof password !== 'string') {
			throw new Error('Cannot gen password hash without password string');
		}
		return bcrypt.hashSync(password, this.#genSalt());
	}

	checkPassword(password, hashedPassword) {
		return bcrypt.compareSync(password, hashedPassword);
	}

	getToken() {
		return this[AuthHelper.token] || null;
	}

	setToken(token) {
		this[AuthHelper.token] = token;
		this.save();
	}

	getIsAuth() {
		return this[AuthHelper.isAuth] || false;
	}

	setIsAuth(isAuth) {
		this[AuthHelper.isAuth] = isAuth || false;
		this.save();
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
