import React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import { Container } from "@mui/material";

const Navbar = () => {
  return (
    <>
      <AppBar position="static">
        <Container maxWidth='xl'>
            <Toolbar>
                <Typography variant="h3" component="div" sx={{ flexGrow: 1, fontWeight:'900' }}>
                    Bank Of React
                </Typography>
            </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
