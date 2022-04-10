import { useState } from 'react';
import { useDispatch } from 'react-redux';
import NothingSelected from './components/views/journal/NothingSelected';

import { userStateChangedAuthAct } from './reducers/authActions';
import MainRouter from './routers/MainRouter';

function App() {
	const dispatch = useDispatch();
	const [checking, setChecking] = useState(true);

	if (checking) {
		dispatch(userStateChangedAuthAct());
		setChecking(false);
	}

	return <>{checking ? <NothingSelected /> : <MainRouter />}</>;
}

export default App;
