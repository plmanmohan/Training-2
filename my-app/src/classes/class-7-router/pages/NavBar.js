import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { MdOutlineContactPhone } from "react-icons/md";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar edge="satrt" color="inherit">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My Website
        </Typography>
        <Link to="/" style={{color: 'white', textDecoration: 'none', marginRight: '1rem'}}>
          <CiHome size="1.5em"/>
        </Link>
        <Link to="/about" style={{color: 'white', textDecoration: 'none', marginRight: '1rem'}}>
          <CiCircleInfo size="1.5em"/>
        </Link>
        <Link to="/contact" style={{color: 'white', textDecoration: 'none', marginRight: '1rem'}}>
          <MdOutlineContactPhone size="1.5em"/>
        </Link>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
