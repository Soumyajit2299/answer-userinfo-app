import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{
          background: 'linear-gradient(to left, #ff0000, #5c7080)' // Set the gradient colors here
        }}>
          <Toolbar>
            <Link to="/">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, textDecoration:"none" }}
            >
             <HomeIcon/>
            </IconButton>
            </Link>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             The Titans
            </Typography>
            <Link to="/register">
              <Button color="secondary" variant="contained" sx={{ mr: "30px" }}>
                Register
              </Button>
            </Link>
            <Link to="/login">
              <Button color="success" variant="contained">
                Login
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
