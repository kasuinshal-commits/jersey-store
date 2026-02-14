import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();

    // CHANGE THESE
    if (email === "admin@jersey.com" && password === "123456") {
      localStorage.setItem("admin", "true");
      navigate("/admin");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <form
        onSubmit={handleLogin}
        className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Admin Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 mb-4 rounded"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 mb-4 rounded"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button className="w-full bg-black text-white py-3 rounded">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
