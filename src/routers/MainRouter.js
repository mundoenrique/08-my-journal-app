import { Route, Routes } from 'react-router-dom';
import JournalView from '../components/views/journal/JournalView';
import SignInView from '../components/views/user/SignInView';
import SignUpView from '../components/views/user/SignUpView';
import AuthRouter from './AuthRouter';

export default function MainRouter() {
	return (
		<>
			<Routes>
				<Route path="/" element={<AuthRouter />}>
					<Route index element={<SignInView />} />
					<Route path="signup" element={<SignUpView />} />
					<Route path="journal" element={<JournalView />} />
					<Route path="*" element={<h1>No found</h1>} />
				</Route>
			</Routes>
		</>
	);
}
