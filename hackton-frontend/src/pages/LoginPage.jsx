import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import {
  Container,
  Paper,
  TextField,
  Button,
  Alert,
  AlertTitle,
  Box,
  Typography
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import './LoginPage.css'; 

import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const localStorage = useLocalStorage();

  const handleLogin = () => {
    // replace with response from backend call
    if (username === "user" && password === "pass") {
      setLoggedIn(true);
      localStorage.addItem("username", username);
      setError("");
    } else {
      setError("Invalid username or password");
    }
  };

  const handleLogout = () => {
    localStorage.deleteItem("username");
    setLoggedIn(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper
        elevation={3}
        sx={{
          padding: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <LockOutlinedIcon color="primary" sx={{ fontSize: "2rem" }} />
        {error && (
          <Alert severity="error" sx={{ marginTop: 2 }}>
            <AlertTitle>Error</AlertTitle>
            {error}
          </Alert>
        )}
        {loggedIn ? (
          <Button
            variant="contained"
            sx={{ color: "#001789" }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        ) : (
          <Box>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              sx={{ color: "#001789" }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ color: "#001789" }}
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              onClick={handleLogin}
              sx={{ color: "#001789" }}
            >
              <Typography
                sx={{ color: "#ffffff", textTransform: "capitalize" }}
              >
                Login
              </Typography>
            </Button>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default Login;
