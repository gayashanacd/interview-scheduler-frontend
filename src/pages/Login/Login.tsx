import { useState } from "react";
import { login } from "../../services/auth.service";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            const response = await login({email, password});
            console.log("JWT token: ", response.token);
            console.log("User: ", response.user);   
        } catch (err: any) {
            setError(err.message || "Login failed") 
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input 
                        type="email"
                        value={email}
                        onChange={(e) => {setEmail(e.target.value)}}
                        required
                     />
                </div>
                <div>
                    <label>Password</label>
                    <input 
                        type="password"
                        value={password}
                        onChange={(e) => {setPassword(e.target.value)}}
                        required
                     />
                </div>

                {error && <p style={{color: "red"}}>{error}</p>}

                <button type="submit" disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                </button>
            </form>
        </div>   
    );
};

export default Login;