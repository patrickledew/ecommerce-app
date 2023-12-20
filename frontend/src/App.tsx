import { useState } from "react";
import "./App.css";
import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { theme } from "./theme";
import { Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

function App() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <AppBar
        sx={{
          position: "relative",
          zIndex: theme.zIndex.drawer + 1, // To make appbar appear over drawer
        }}
      >
        <Toolbar>
          <Typography variant="h4">
            <Link to="/">Blamazon</Link>
          </Typography>
          <IconButton size="large" onClick={() => setNavOpen((open) => !open)}>
            <Menu htmlColor="#f0f0f0" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={navOpen} onClose={() => setNavOpen(false)}>
        <Stack width={400} p={5} pt={15}>
          <Typography variant="h4">Welcome to Blamazon</Typography>
          <Divider sx={{ my: 3 }} />
        </Stack>
      </Drawer>
      <Outlet />

      <TanStackRouterDevtools />
    </>
  );
}

export default App;
