import React, { useState } from 'react';
import useLocalStorage from "../hooks/useLocalStorage"
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Alert,
  AlertTitle,
  Box
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import './Login.css'; 


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');
  const localStorage = useLocalStorage();

  const handleLogin = () => {
    // replace with response from backend call
    if (username === 'user' && password === 'pass') {
      setLoggedIn(true);
      localStorage.addItem('username', username);
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    localStorage.deleteItem('username');
    setLoggedIn(false);
  };

  return (
    <Box className="background-image">
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <LockOutlinedIcon color="primary" sx={{ fontSize: '2rem' }} />
        {error && (
          <Alert severity="error" sx={{ marginTop: 2 }}>
            <AlertTitle>Error</AlertTitle>
            {error}
          </Alert>
        )}
        {loggedIn ? (
          <Button variant="contained" color="secondary" onClick={handleLogout}>
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
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleLogin}
            >
              Login
            </Button>
          </Box>
        )}
      </Paper>
    </Container>
    </Box>
  );
};

export default Login;
