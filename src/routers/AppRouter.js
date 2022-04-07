import { Route, Routes } from 'react-router-dom';
import JournalView from '../views/journal/JournalView';
import SignInView from '../views/user/SignInView';
import SignUpView from '../views/user/SignUpView';

export default function AppRouter() {
	return (
		<>
			<Routes>
				<Route path="/" element={<SignInView />} />
				<Route path="/signup" element={<SignUpView />} />
				<Route path="/journal" element={<JournalView />} />
				<Route path="*" element={<h1>No found</h1>} />
			</Routes>
		</>
	);
}
