import { Box } from "@mui/material";
import TooltipSidebar from "@mui/material/Tooltip";
import {
  Home,
  InsertChartOutlinedOutlined,
  AssignmentTurnedInOutlined,
  AccountBalanceWalletOutlined,
  LocalMallOutlined,
} from "@mui/icons-material";
import { styled } from "@mui/system";
import image from "../assets/images/images.png";

const Sidebar: React.FC = () => {
  const SidebarItem = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1),
    color: "white",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#333",
    },
  }));
  return (
    <Box
      sx={{
        width: "auto",
        backgroundColor: "#2c2c3e",
        height: "100vh",
        padding: "16px 5px",
      }}
    >
      <SidebarItem sx={{ marginBottom: "20px", alignItems: "center" }}>
        <TooltipSidebar title="Fitpeo">
          <img src={image} alt="" style={{ width: 25 }} />
        </TooltipSidebar>
      </SidebarItem>
      <SidebarItem>
        <TooltipSidebar title="Dashboard">
          <Home
            sx={{
              marginRight: 1,
              color: "#3f51b5",
            }}
          />
        </TooltipSidebar>
      </SidebarItem>
      <SidebarItem sx={{ marginBottom: "8px", alignItems: "center" }}>
        <TooltipSidebar title="Popular Dishes">
          <InsertChartOutlinedOutlined sx={{ marginRight: 1 }} />
        </TooltipSidebar>
      </SidebarItem>
      <SidebarItem sx={{ marginBottom: "8px", alignItems: "center" }}>
        <TooltipSidebar title="Goals">
          <AssignmentTurnedInOutlined sx={{ marginRight: 1 }} />
        </TooltipSidebar>
      </SidebarItem>
      <SidebarItem sx={{ marginBottom: "8px", alignItems: "center" }}>
        <TooltipSidebar title="Menus">
          <AccountBalanceWalletOutlined sx={{ marginRight: 1 }} />
        </TooltipSidebar>
      </SidebarItem>
      <SidebarItem sx={{ marginBottom: "8px", alignItems: "center" }}>
        <TooltipSidebar title="Shopping">
          <LocalMallOutlined sx={{ marginRight: 1 }} />
        </TooltipSidebar>
      </SidebarItem>
    </Box>
  );
};

export default Sidebar;
