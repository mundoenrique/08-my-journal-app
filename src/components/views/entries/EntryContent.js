import EntryNavBar from './EntryNavBar';

export default function EntryContent() {
	return (
		<>
			<div className="notes__main-content">
				<EntryNavBar />
				<div className="notes__content">
					<input
						type="text"
						placeholder="Some awesome title"
						className="notes__title-input"
						name="title"
						autoComplete="off"
						// value={title}
						// onChange={handleInputValues}
					/>
					<textarea
						placeholder="What happened today"
						className="notes__textarea"
						name="body"
						// value={body}
						// onChange={handleInputValues}
					></textarea>
					{/* {note.url && (
						<div className="notes__image">
							<img src={note.url} alt={title} />
						</div>
					)} */}
				</div>
				<button
					className="btn btn-danger"
					// onClick={handleDelete}
				>
					Delete
				</button>
			</div>
		</>
	);
}
