import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
    const { login } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    //User input -> component state: The email and password inputs update local state via setEmail and setPassword.
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const from = location.state?.from?.pathname || "/dashboard";

    function handleSubmit(event) {
        event.preventDefault();
        setError("");

        try {
            login(email, password);
            navigate(from, { replace: true });
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleSubmit}>
                <h1>Login</h1>

                {error && <div className="error">{error}</div>}

                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />

                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                />

                <button type="submit">
                    Login
                </button>

                <p>
                    Don't have an account?{" "}
                    <Link to="/register">Register</Link>
                </p>
            </form>
        </div>
    );
}

export default Login;
