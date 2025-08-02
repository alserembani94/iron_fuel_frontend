import { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth();

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("Signup successful!");
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="container text-white py-5">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignup}>
                <input className="form-control mb-2" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input className="form-control mb-2" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button className="btn btn-primary">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;
