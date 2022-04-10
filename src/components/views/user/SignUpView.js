import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import validator from 'validator';

import { useFormHook } from '../../../hooks/useFormHook';
import { signUpUserAuthAct } from '../../../reducers/authActions';
import { hReqReset } from '../../../reducers/handleRequestReducer';

export default function SignUpView() {
	const { loading, success, errorMsg } = useSelector(
		(state) => state.handleRequest
	);
	const [ValueError, setValueError] = useState(false);
	const dispatch = useDispatch();
	const [{ name, email, password, password2 }, handleFormValues, resetValues] =
		useFormHook({
			name: '',
			email: '',
			password: '',
			password2: '',
		});

	if (errorMsg) {
		Swal.fire({
			icon: 'error',
			title: 'Wait!',
			text: errorMsg,
		}).then(() => {
			dispatch(hReqReset());
		});
	}

	if (success) {
		dispatch(hReqReset());
		resetValues();
	}

	const handleSignUp = (e) => {
		e.preventDefault();

		if (isValidform()) {
			dispatch(signUpUserAuthAct(name, email, password));
		}
	};

	const isValidform = () => {
		let valid = true;

		if (name.trim().length === 0) {
			setValueError('Name is required');
			valid = false;
		} else if (!validator.isEmail(email)) {
			setValueError('Invalid email');
			valid = false;
		} else if (password !== password2 || password.trim().length < 5) {
			setValueError('Password should be at least 6 characters');

			valid = false;
		}
		valid && setValueError(false);

		return valid;
	};

	return (
		<>
			<h3 className="auth__title">Register</h3>
			<form
				className="animate__animated animate__fadeIn animate__faster"
				onSubmit={handleSignUp}
			>
				{ValueError && <div className="auth__alert-error">{ValueError}</div>}
				<input
					type="text"
					placeholder="Name"
					name="name"
					className="auth__input"
					autoComplete="off"
					value={name}
					onChange={handleFormValues}
					disabled={loading}
				/>
				<input
					type="text"
					placeholder="Email"
					name="email"
					className="auth__input"
					autoComplete="off"
					value={email}
					onChange={handleFormValues}
					disabled={loading}
				/>
				<input
					type="password"
					placeholder="Password"
					name="password"
					className="auth__input"
					value={password}
					onChange={handleFormValues}
					disabled={loading}
				/>
				<input
					type="password"
					placeholder="Password Confirmation"
					name="password2"
					className="auth__input"
					value={password2}
					onChange={handleFormValues}
					disabled={loading}
				/>
				<button
					type="submit"
					className="btn btn-primary btn-block mb-5"
					disabled={loading}
				>
					Register
				</button>
				<Link to="/" className="link">
					Alredy have an account?
				</Link>
			</form>
		</>
	);
}
