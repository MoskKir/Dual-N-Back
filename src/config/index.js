export const auth = {
	paths: {
		notAuthenticated: [
			'/password-recovery',
			'/',
		],
		authenticated: '/',
		login: '/',
	},
	tokens: {
		refresh: 'session.refresh_token',
		access: 'session.access_token',
	},
};

export const i18n = {
	defaultLocale: 'en',
	locales: {
		en: 'English',
	},
};

export const app = {
	navigationType: 'app.navigation_type',
};

export default {
	appVersion: process.env.REACT_APP_VERSION,
	staticUrl: process.env.REACT_APP_API_URL + '/static/private',
	apiUrl: process.env.REACT_APP_API_URL,
	table,
	auth,
	i18n,
	app,
};
