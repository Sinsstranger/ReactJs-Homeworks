import AuthHelper from '@helpers/Auth';

const authLogoutMiddleware = () => (next) => (action) => {
	if (action && action.type === 'User/logout') {
		AuthHelper.clean();
	}
	return next(action);
};

export default authLogoutMiddleware;
