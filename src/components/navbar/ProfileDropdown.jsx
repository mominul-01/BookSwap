import { useState } from "react";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const ProfileDropdown = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const settings = [
    {
      label: "Profile",
      plink: "/profile",
    },
    {
      label: "Account",
      plink: "/account",
    },
    {
      label: "Dashboard",
      plink: "/dashboard",
    },
    {
      label: "Logout",
      plink: "/logout",
    },
  ];

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 0 }}>
        <IconButton
          onClick={handleOpenUserMenu}
          sx={{
            p: 0,
            display: "flex",
            gap: "10px",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <Avatar alt="Sahos Mia" src="/static/images/avatar/2.jpg" />
          <span className=" text-sm  font-bold">John Doe</span>
        </IconButton>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <Link to={setting.plink} sx={{ textAlign: "center" }}>
                {setting.label}
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  );
};

export default ProfileDropdown;
