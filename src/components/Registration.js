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
const Registration = () => {
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

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const body = { username, password };
      const response = await fetch("http://localhost:5000/test/v1/reguser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const result = await response.json();
      if (response.status === 200) {
        setNotifMsg(result);
        setNotifStatus("error");
        setOpen(true);
      } else if (response.status === 201) {
        setNotifMsg(result);
        setNotifStatus("success");
        setOpen(true);
        setUsername("");
        setPassword("");
      } else {
        setNotifMsg("Something Went Wrong!");
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
        <Typography variant="h4">REGISTER A TITAN</Typography>
        <Stack spacing={2}>
          <TextField
          required
            id="username"
            label="Username"
            variant="standard"
            size="medium"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
          required
            id="password"
            label="Password"
            variant="standard"
            size="medium"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" color="secondary" onClick={registerUser}>
            <Typography variant="button">Register User</Typography>
          </Button>
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

export default Registration;
