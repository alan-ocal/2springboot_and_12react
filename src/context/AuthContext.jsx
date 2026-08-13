import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : null;
    });

    function register(name, email, password) {
        const newUser = {name, email, password};
        localStorage.setItem('registeredUser', JSON.stringify(newUser));
        setUser(newUser);
        localStorage.setItem('user', JSON.stringify(newUser));

    }

    function login(email, password) {
        const registeredUser = JSON.parse(
            localStorage.getItem("registeredUser")
        );
        if (
            !registeredUser ||
            registeredUser.email !== email ||
            registeredUser.password !== password
        ) {
            throw new Error("Invalid email or password");
        }
        setUser(registeredUser);
        localStorage.setItem("user", JSON.stringify(registeredUser));
    }

    function logout() {
        setUser(null);
        localStorage.removeItem("user");
    }

    return (
        <AuthContext.Provider value={{user, register, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}