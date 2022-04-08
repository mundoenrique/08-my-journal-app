import { useDispatch, useSelector } from 'react-redux';
import { LoggedOut } from '../Reducers/authReducer';
import JournalEntries from './views/journal/JournalEntries';

export default function SideBar() {
	const dispatch = useDispatch();
	const { name } = useSelector((state) => state.auth);

	const handleLogout = () => {
		dispatch(LoggedOut());
	};

	return (
		<>
			<aside className="journal__sidebar">
				<div className="journal__sidebar-navbar">
					<h3 className="mt-5">
						<i className="far fa-moon"></i>
						<span> {name}</span>
					</h3>
					<button className="btn" onClick={handleLogout}>
						logOut
					</button>
				</div>
				<div
					className="journal__new-entry"
					// onClick={handleNewEntry}
				>
					<i className="far fa-calendar-plus fa-5x"></i>
					<p className="mt-5">New entry</p>
				</div>
				<JournalEntries />
			</aside>
		</>
	);
}
