import React from "react";
import {
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import DishesIcon from "@mui/icons-material/Fastfood";
import MenuIcon from "@mui/icons-material/MenuBook";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { BiTargetLock } from "react-icons/bi";

const Menu: React.FC = () => {
  return (
    <Paper
      style={{
        padding: "20px",
        backgroundColor: "rgb(55 55 72)",
        color: "white",
        height: "100%",
      }}
    >
      <List>
        <ListItem button sx={{ mb: 2 }}>
          <ListItemIcon>
            <span
              style={{ padding: 6 }}
              className="bg-purple-100 text-purple-800 text-xs font-large me-2 rounded-full dark:bg-purple-900 dark:text-purple-300"
            >
              {" "}
              <BiTargetLock style={{ fontSize: 25, marginBottom: 1 }} />
            </span>
          </ListItemIcon>
          <ListItemText
            primary={<Typography style={{ color: "white" }}>Goals</Typography>}
          />
          <span
            style={{ padding: 6, background: "grey" }}
            className="bg-grey-100 text-white-800 text-xs font-medium me-2 rounded-full dark:bg-grey-900 dark:text-white-300"
          >
            <ArrowForwardIosIcon style={{ fontSize: 15, color: "white" }} />
          </span>
        </ListItem>
        <ListItem button sx={{ mb: 2 }}>
          <ListItemIcon>
            <span
              style={{ padding: 6 }}
              className="bg-pink-100 text-pink-800 text-xs font-large me-2  rounded-full dark:bg-pink-900 dark:text-pink-300"
            >
              <DishesIcon style={{ fontSize: 25, marginBottom: 1 }} />
            </span>
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography style={{ color: "white" }}>Popular Dishes</Typography>
            }
          />
          <span
            style={{ padding: 6, background: "grey" }}
            className="bg-grey-100 text-white-800 text-xs font-medium me-2 rounded-full dark:bg-grey-900 dark:text-white-300"
          >
            <ArrowForwardIosIcon style={{ fontSize: 15, color: "white" }} />
          </span>
        </ListItem>
        <ListItem button sx={{ mb: 2 }}>
          <ListItemIcon>
            <span
              style={{ padding: 6 }}
              className="bg-green-100 text-green-800 text-xs font-medium me-2 rounded-full dark:bg-green-900 dark:text-green-300"
            >
              <MenuIcon style={{ fontSize: 25, marginBottom: 1 }} />
            </span>
          </ListItemIcon>
          <ListItemText
            primary={<Typography style={{ color: "white" }}>Menus</Typography>}
          />
          <span
            style={{ padding: 6, background: "grey" }}
            className="bg-grey-100 text-white-800 text-xs font-medium me-2 rounded-full dark:bg-grey-900 dark:text-white-300"
          >
            <ArrowForwardIosIcon style={{ fontSize: 15, color: "white" }} />
          </span>
        </ListItem>
      </List>
    </Paper>
  );
};

export default Menu;
