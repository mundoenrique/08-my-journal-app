import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import validator from 'validator';

import { useFormHook } from '../../../hooks/useFormHook';
import {
	signInUserAuthAct,
	singnInGoogleAuthAct,
} from '../../../reducers/authActions';
import { hReqReset } from '../../../reducers/handleRequestReducer';

export default function SignInView() {
	const dispatch = useDispatch();
	const { loading, errorMsg } = useSelector((state) => state.handleRequest);
	const [ValueError, setValueError] = useState(false);

	const [{ email, password }, handleFormValues] = useFormHook({
		email: '',
		password: '',
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

	const handlesignIn = (e) => {
		e.preventDefault();

		if (isValidform()) {
			dispatch(signInUserAuthAct(email, password));
		}
	};

	const isValidform = () => {
		let valid = true;

		if (!validator.isEmail(email)) {
			setValueError('Invalid email');
			valid = false;
		} else if (password.trim().length === 0) {
			setValueError('Password is required');

			valid = false;
		}
		valid && setValueError(false);

		return valid;
	};

	const handleGoogleSignIn = () => {
		dispatch(singnInGoogleAuthAct());
	};

	return (
		<>
			<h3 className="auth__title">Login</h3>
			<form
				className="animate__animated animate__fadeIn animate__faster"
				onSubmit={handlesignIn}
			>
				{ValueError && <div className="auth__alert-error">{ValueError}</div>}
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
				<button
					type="submit"
					className="btn btn-primary btn-block"
					disabled={loading}
				>
					Login
				</button>
				<div className="auth__social-network">
					<p>Login with social network</p>
					<div className="google-btn" onClick={handleGoogleSignIn}>
						<div className="google-icon-wrapper">
							<img
								className="google-icon"
								src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
								alt="google button"
							/>
						</div>
						<p className="btn-text">
							<b>Sign in with google</b>
						</p>
					</div>
				</div>
				<Link to="signup" className="link">
					Create new account
				</Link>
			</form>
		</>
	);
}
