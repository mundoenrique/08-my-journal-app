import { Link } from 'react-router-dom';

export default function SignUpView() {
	const msgError = false;
	return (
		<>
			<h3 className="auth__title">Register</h3>
			<form
				className="animate__animated animate__fadeIn animate__faster"
				// onSubmit={handleRegister}
			>
				{msgError && <div className="auth__alert-error">{msgError}</div>}
				<input
					type="text"
					placeholder="Name"
					name="name"
					className="auth__input"
					autoComplete="off"
					// value={name}
					// onChange={handleInputValues}
				/>
				<input
					type="text"
					placeholder="Email"
					name="email"
					className="auth__input"
					autoComplete="off"
					// value={email}
					// onChange={handleInputValues}
				/>
				<input
					type="password"
					placeholder="Password"
					name="password"
					className="auth__input"
					// value={password}
					// onChange={handleInputValues}
				/>
				<input
					type="password"
					placeholder="Password Confirmation"
					name="password2"
					className="auth__input"
					// value={password2}
					// onChange={handleInputValues}
				/>
				<button type="submit" className="btn btn-primary btn-block mb-5">
					Register
				</button>
				<Link to="/" className="link">
					Alredy have an account?
				</Link>
			</form>
		</>
	);
}
