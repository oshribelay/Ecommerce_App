import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector, useDispatch } from 'react-redux';
import { toggleClicked } from '../reducers/clicked';

const pages = ["Get In Touch"];

function ResponsiveAppBar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {
    setAnchorElNav(null);
    var redirectUrl = event.currentTarget.innerText;
    redirectUrl = redirectUrl.replace(/\s+/g, "-").toLowerCase();
    window.location.replace(`http://localhost:3000/${redirectUrl}`);
  };

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleClicked());
  };

  return (
    <AppBar
      position="static"
      sx={{
        background:
          "linear-gradient(90deg, hsla(277, 79%, 84%, 1) 0%, hsla(204, 95%, 77%, 1) 100%)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <FitnessCenterIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: "10%",
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              ml: "10px",
            }}
          >
            Beast Nutrition
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <FitnessCenterIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Beast Nutrition
          </Typography>
          <IconButton
            onClick={ handleClick }
          >
            <ShoppingCartIcon
              sx={{ color: "white", display: { xs: "flex", md: "none" } }}
            />
          </IconButton>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              pl: "35%",
              maxWidth: "50%",
              justifyContent: "flex-end",
              pr: "10px"
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block", mx: "10px" }}
              >
                {page}
              </Button>
            ))}
            <IconButton
              onClick={ handleClick }
            >
              <ShoppingCartIcon
                sx={{ color: "white", display: { xs: "none", md: "flex" } }}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
