// src/components/Header.tsx

import React from "react";
import { Box, IconButton, Badge } from "@mui/material";
import {
  AccountCircle,
  Notifications,
  Email,
  Search,
} from "@mui/icons-material";

const Header: React.FC = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 60,
        width: "95%",
        height: "10%",
        backgroundColor: "#1e1e2f",
        zIndex: 1000,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 2,
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.3)",
      }}
    >
      <Box display="flex" alignItems="center">
        <Search style={{ color: "white", marginRight: 8 }} />
        <input
          type="text"
          placeholder="Search..."
          style={{
            backgroundColor: "transparent",
            border: "none",
            color: "white",
          }}
        />
      </Box>
      <Box display="flex" alignItems="center">
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <Email style={{ color: "white" }} />
          </Badge>
        </IconButton>
        <IconButton>
          <Notifications style={{ color: "white" }} />
        </IconButton>
        <IconButton>
          <AccountCircle style={{ color: "white" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;
