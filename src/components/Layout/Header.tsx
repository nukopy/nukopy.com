import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { Route } from "@/routes";

const MenuWrapper = styled(Box)({
  flexGrow: 1,

  // right
  position: "absolute",
  right: 0,
  top: 0,
});

type HeaderProps = {
  routes: Route[];
};

const Header = (props: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setIsMenuOpen(true);
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
    setAnchorElNav(null);
  };

  return (
    <MenuWrapper>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={isMenuOpen}
        onClose={handleCloseMenu}
      >
        {props.routes.map((route) => {
          if (route.name === "default-page") return;

          return (
            <MenuItem key={route.key} onClick={handleCloseMenu}>
              <Typography textAlign="center">
                <Link to={route.path}>{route.name.toUpperCase()}</Link>
              </Typography>
            </MenuItem>
          );
        })}
      </Menu>
    </MenuWrapper>
  );
};

export default Header;
