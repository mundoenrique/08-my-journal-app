import SideBar from '../../SideBar';

export default function JournalView() {
	return (
		<>
			<div className="journal__main-content animate__animated animate__fadeIn animate__faster">
				<SideBar />
				{/* <main>{active ? <NoteScreen /> : <NothingSelected />}</main> */}
			</div>
		</>
	);
}
