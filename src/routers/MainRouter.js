import { Route, Routes } from 'react-router-dom';
import JournalView from '../components/views/journal/JournalView';
import SignInView from '../components/views/user/SignInView';
import SignUpView from '../components/views/user/SignUpView';

export default function MainRouter() {
	return (
		<>
			<div className="auth__main">
				<div className="auth__box-container">
					<Routes>
						<Route path="/">
							<Route path="/" element={<SignInView />} />
							<Route path="/signup" element={<SignUpView />} />
							<Route path="/journal" element={<JournalView />} />
							<Route path="*" element={<h1>No found</h1>} />
						</Route>
					</Routes>
				</div>
			</div>
		</>
	);
}
