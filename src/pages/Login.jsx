import { useState } from "react";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth();

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert("Login successful!");
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="container text-white py-5">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input className="form-control mb-2" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input className="form-control mb-2" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button className="btn btn-primary">Log In</button>
            </form>
        </div>
    );
};

export default Login;
