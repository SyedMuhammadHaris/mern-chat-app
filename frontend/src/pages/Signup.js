import { Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isLoading, error } = useSignup();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password);
    navigate("/");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="App">
      <form className="form" onSubmit={handleSubmit}>
        <Typography variant="h4">Signup</Typography>
        <TextField
          type="text"
          label="Email"
          variant="outlined"
          fullWidth
          required
          sx={{
            marginTop: 5,
            marginBottom: 5,
            display: "block",
          }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          fullWidth
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          sx={{
            marginTop: 5,
            marginBottom: 5,
          }}
          type="submit"
          disabled={isLoading}
        >
          Signup
        </Button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default Signup;
