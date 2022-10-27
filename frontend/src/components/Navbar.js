import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
// import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  const handleClick = () => {
    logout();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/"> Meeting Scheduler </Link>
          </Typography>
          {user && (
            <>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {user.email}
              </Typography>
              <Button color="inherit" onClick={handleClick}>
                Logout
              </Button>
            </>
          )}
          {!user && (
            <>
              <Button color="inherit">
                <Link to="/">Login</Link>
              </Button>
              <Button color="inherit">
                <Link to="/signup">Signup</Link>
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
