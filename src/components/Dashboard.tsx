// src/components/Dashboard.tsx

import React from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  IconButton,
  CircularProgress,
  Badge,
} from "@mui/material";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {
  AccountCircle,
  Notifications,
  Email,
  Search,
} from "@mui/icons-material";
import Menu from "./Menu";
import ActivityChart from "./ActivityChart";
import Sidebar from "./Sidebar";
import RecentOrders from "./RecentOrders";
import CustomerFeedback from "./CustomerFeedback";
import { PiBasketFill } from "react-icons/pi";
import { TbShoppingBagCheck } from "react-icons/tb";
import { TbShoppingBagX } from "react-icons/tb";
import { FaCircleDollarToSlot } from "react-icons/fa6";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard: React.FC = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box
        sx={{
          flexGrow: 1,
          padding: 3,
          backgroundColor: "#1e1e2f",
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
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
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
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
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={2}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                backgroundColor: "rgb(55 55 72)",
                color: "#fff",
                height: "100%",
              }}
            >
              <span
                style={{ padding: 4, borderRadius: 5 }}
                className="bg-blue-100 text-blue-800 text-xs font-medium me-2 dark:bg-blue-900 dark:text-blue-300"
              >
                <PiBasketFill style={{ fontSize: 20, marginBottom: 1 }} />
              </span>
              <Typography
                width={"100%"}
                variant="body1"
                sx={{ fontSize: 12, my: 1 }}
              >
                Total Orders
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Typography variant="body2">
                  <b>75</b>
                </Typography>
                <Typography
                  variant="body2"
                  color="green"
                  sx={{ marginLeft: 1, fontWeight: 700 }}
                >
                  ▲ 3%
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                backgroundColor: "rgb(55 55 72)",
                color: "#fff",
                height: "100%",
              }}
            >
              <span
                style={{ padding: 4, borderRadius: 5 }}
                className="bg-green-100 text-green-800 text-xs font-medium me-2 dark:bg-green-900 dark:text-green-300"
              >
                <TbShoppingBagCheck style={{ fontSize: 20, marginBottom: 1 }} />
              </span>
              <Typography variant="body1" sx={{ fontSize: 12, my: 1 }}>
                Total Delivered
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Typography variant="body2">
                  <b>70</b>
                </Typography>
                <Typography
                  variant="body2"
                  color="red"
                  sx={{ marginLeft: 1, fontWeight: 700 }}
                >
                  ▼ 3%
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                backgroundColor: "rgb(55 55 72)",
                color: "#fff",
                height: "100%",
              }}
            >
              <span
                style={{ padding: 4, borderRadius: 5 }}
                className="bg-red-100 text-red-800 text-xs font-medium me-2 dark:bg-red-900 dark:text-red-300"
              >
                <TbShoppingBagX style={{ fontSize: 20, marginBottom: 1 }} />
              </span>

              <Typography variant="body1" sx={{ fontSize: 12, my: 1 }}>
                Total Cancelled
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Typography variant="body2">
                  <b>05</b>
                </Typography>
                <Typography
                  variant="body2"
                  color="green"
                  sx={{ marginLeft: 1, fontWeight: 700 }}
                >
                  ▲ 3%
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                backgroundColor: "rgb(55 55 72)",
                color: "#fff",
                height: "100%",
              }}
            >
              <span
                style={{
                  padding: 4,
                  borderRadius: 5,
                  color: "#ffb6ce",
                  background: "#85334e",
                }}
                className="bg-pink-100  text-xs font-medium me-2"
              >
                <FaCircleDollarToSlot
                  style={{ fontSize: 20, marginBottom: 1 }}
                />
              </span>

              <Typography variant="body1" sx={{ fontSize: 12, my: 1 }}>
                Total Revenue
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Typography variant="body2">
                  <b>$12k</b>
                </Typography>
                <Typography
                  variant="body2"
                  color="red"
                  sx={{ marginLeft: 1, fontWeight: 700 }}
                >
                  ▼ 3%
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "rgb(55 55 72)",
                color: "#fff",
                height: "100%",
              }}
            >
              <Box>
                <Typography sx={{ fontSize: 12 }}>Net Profit</Typography>
                <Typography
                  variant="h4"
                  sx={{ fontSize: 12, fontWeight: 600, my: 1 }}
                >
                  $6759.25
                </Typography>
                <Typography variant="body1" color="green">
                  ▲ 3%
                </Typography>
              </Box>
              <Box sx={{ position: "relative", display: "inline-flex" }}>
                <CircularProgress
                  variant="determinate"
                  value={70}
                  size={90}
                  sx={{
                    "--CircularProgress-trackThickness": "9px",
                    "--CircularProgress-progressThickness": "7px",
                  }}
                  thickness={6}
                  title="Goal completed"
                />
                <Box
                  sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="caption"
                    component="div"
                    color="textSecondary"
                    sx={{ fontSize: "9px" }}
                  >
                    70%
                  </Typography>

                  <Typography
                    variant="caption"
                    component="div"
                    color="textSecondary"
                    sx={{ fontSize: "6px" }}
                  >
                    Goal Completed
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
        <Grid container marginTop={"5px"} spacing={3}>
          <Grid item xs={12} md={8}>
            <Paper
              style={{
                backgroundColor: "rgb(55 55 72)",
                color: "white",
                fontSize: "14px",
                height: "100%",
              }}
            >
              <ActivityChart />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Menu />
          </Grid>
        </Grid>
        <Grid marginTop={"5px"} container spacing={3}>
          <RecentOrders />
          <CustomerFeedback />
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
