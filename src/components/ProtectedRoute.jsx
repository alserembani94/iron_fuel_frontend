import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const [user, loading] = useAuthState(auth);

    if (loading) return <p>Loading...</p>;
    return user ? children : <Navigate to="/" />;
};

export default ProtectedRoute;