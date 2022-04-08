import { useSelector } from 'react-redux';
import SideBar from '../../SideBar';
import EntryContent from '../entries/EntryContent';
import NothingSelected from './NothingSelected';

export default function JournalView() {
	const { activeEntry } = useSelector((state) => state.entries);
	return (
		<>
			<div className="journal__main-content animate__animated animate__fadeIn animate__faster">
				<SideBar />
				<main>{!activeEntry ? <EntryContent /> : <NothingSelected />}</main>
			</div>
		</>
	);
}
