import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Register() {
    const { register } = useAuth();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        setError("");

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        register(name, email, password);
        navigate("/dashboard");
        }

    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleSubmit}>
                <h1>Register</h1>

                {error && <div className="error">{error}</div>}

                <label>Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                />

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

                <label>Confirm Password</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    required
                />

                <button type="submit">
                    Register
                </button>

                <p>
                    Already have an account?{" "}
                    <Link to="/login">Login</Link>
                </p>
            </form>
        </div>
    );
}

export default Register;