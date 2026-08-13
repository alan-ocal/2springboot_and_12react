import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Dashboard(){
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    function handleLogout() {
        logout();
        navigate("/login");
    }

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <p>
                Welcome, <strong>{user.name}</strong>
            </p>
            <p>Email: {user.email}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Dashboard;