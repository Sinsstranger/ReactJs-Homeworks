import AuthHelper from '@helpers/Auth';

const authLoginLogoutMiddleware = () => (next) => (action) => {
	if (action && action.type === 'User/logout') {
		AuthHelper.clean();
	}
	if (action && action.type === 'User/login') {
		AuthHelper.setIsAuth(true);
		AuthHelper.setToken(action.payload);
	}
	return next(action);
};

export default authLoginLogoutMiddleware;
