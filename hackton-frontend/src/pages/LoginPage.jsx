import { useState } from "react";
import {
  Container,
  Paper,
  TextField,
  Button,
  Box,
  Typography
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import './LoginPage.css';

import * as AUTH_REQ from '../api/auth'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await AUTH_REQ.login(email, password)
      localStorage.setItem('token', response.token)
      window.location.pathname = '/home'
    }
    catch (e) {
      console.error(e)
    }
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

        <Box>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
      </Paper>
    </Container>
  );
};

export default Login;
