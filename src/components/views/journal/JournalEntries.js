// import { useSelector } from 'react-redux';
import JournalEntry from './JournalEntry';

export default function JournalEntries() {
	// const { notes } = useSelector((state) => state.notes);
	const { entries } = {
		entries: [
			{
				id: '6ZBcSZpgEXGgBX3GndFx',
				url: 'https://res.cloudinary.com/dfzenqqko/image/upload/v1648843620/fluit3oitdrtvn7qcqll.png',
				title: 'Prueba 1',
				body: 'Cargando imagenes ',
				date: 1648843589954,
			},
			{
				id: 'GpS5ea8ke0KdQkRCCGtp',
				body: 'Jugando con la aplicación ',
				url: 'https://res.cloudinary.com/dfzenqqko/image/upload/v1648843649/uaiwaikmg56bfnrylfof.jpg',
				date: 1648843625383,
				title: 'Prueba 2',
			},
			{
				id: 'K5ISqX9Z5eEkYv1797Sl',
				date: 1648843656052,
				url: 'https://res.cloudinary.com/dfzenqqko/image/upload/v1648843678/sp6qlq0scvy6x0inj4r5.png',
				body: 'llenado el formulario',
				title: 'Prueba3',
			},
		],
	};

	return (
		<div className="journal__entries">
			{entries.map((entry) => (
				<JournalEntry key={entry.id} {...entry} />
			))}
		</div>
	);
}
