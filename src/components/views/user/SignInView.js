import { Link } from 'react-router-dom';

export default function SignInView() {
	return (
		<>
			<h3 className="auth__title">Login</h3>
			<form
				className="animate__animated animate__fadeIn animate__faster"
				// onSubmit={handleLogin}
			>
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
				<button
					type="submit"
					className="btn btn-primary btn-block"
					// disabled={loading}
				>
					Login
				</button>
				<div className="auth__social-network">
					<p>Login with social network</p>
					<div className="google-btn" /* onClick={handleGoogleLogin} */>
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
