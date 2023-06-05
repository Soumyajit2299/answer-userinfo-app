import React from "react";
import {
  Alert,
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import { Link } from "react-router-dom";
const Login = ({ setUserid }) => {
  //Snackbar Alert States
  const [open, setOpen] = useState(false);
  const [notifStatus, setNotifStatus] = useState("success");
  const [notifMsg, setNotifMsg] = useState("");
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  //End of Snackbar Alert States

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginBtnState, setLoginBtnState] = useState("block");
  const [fetchBtnState, setFetchBtnState] = useState("none");
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const body = { username, password };
      const response = await fetch("http://localhost:5000/test/v1/dummylogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      console.log(data);
      if (data.userid) {
        setLoginBtnState("none");
        setFetchBtnState("block");
        setNotifMsg("Login Succesfull!");
        setNotifStatus("success");
        setOpen(true);
        setUserid(data.userid);
      } else {
        setNotifMsg(data);
        setNotifStatus("error");
        setOpen(true);
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <Box
        sx={{
          width: "40%",
          height: "100vh",
          marginLeft: "20%",
          mt: 10,
        }}
      >
        <Typography variant="h4">LOGIN TO THE TITANS DATABASE</Typography>
        <Stack spacing={2}>
          <TextField
            id="username"
            label="Username"
            variant="standard"
            size="medium"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            id="password"
            label="Password"
            variant="standard"
            size="medium"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={handleLogin}
            sx={{ display: `${loginBtnState}` }}
          >
            <Typography variant="button">Login Titan</Typography>
          </Button>
          <Link to="/profile" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              color="secondary"
              sx={{ display: `${fetchBtnState}` }}
            >
              <Typography variant="button">Check Profile</Typography>
            </Button>
          </Link>
        </Stack>
        <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity={`${notifStatus}`}
            sx={{ width: "100%" }}
          >
            {notifMsg}
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
};

export default Login;
