import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export default function AuthRouter() {
	const { pathname } = useLocation();
	const { logged } = useSelector((state) => state.auth);
	let auth = false;
	let path = pathname;
	// const matchPath = pathname.match(/^\/(|signup|journal)$/);
	switch (pathname) {
		case '/':
		case '/signup':
			auth = !logged && true;
			path = '/journal';
			break;
		case '/journal':
			auth = logged && true;
			path = '/';
			break;
		default:
			auth = true;
			break;
	}

	if (!auth) {
		return <Navigate to={path} replace={true} />;
	}

	return (
		<>
			{logged ? (
				<Outlet />
			) : (
				<div className="auth__main">
					<div className="auth__box-container">
						<Outlet />
					</div>
				</div>
			)}
		</>
	);
}
