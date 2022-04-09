import moment from 'moment';

export default function EntryNavBar() {
	return (
		<>
			<div className="notes__appbar">
				<span>{moment().format('MMMM Do YYYY, h:mm:ss a')}</span>
				<input
					id="fileSelector"
					type="file"
					name="file"
					style={{ display: 'none' }}
					// onChange={handleFileChange}
				/>
				<div>
					<button
						className="btn"
						// onClick={handlePictureclick}
					>
						Picture
					</button>
					<button
						className="btn"
						// onClick={handlesave}
					>
						Save
					</button>
				</div>
			</div>
		</>
	);
}
