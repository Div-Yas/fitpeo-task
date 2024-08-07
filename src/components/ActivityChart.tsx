// ActivityChart.tsx
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { Typography, Box, FormControl, Select, MenuItem } from "@mui/material";

const data = [
  { name: "5", uv: 9000, pv: 4000, sv: 1000, cv: 2800 },
  { name: "9", uv: 3000, pv: 2000, sv: 1500, cv: 800 },
  { name: "11", uv: 4000, pv: 3000, sv: 2000, cv: 1000 },
  { name: "13", uv: 5000, pv: 3500, sv: 2500, cv: 1200 },
  { name: "15", uv: 4000, pv: 12800, sv: 1800, cv: 900 },
  { name: "17", uv: 6000, pv: 3200, sv: 2200, cv: 1100 },
  { name: "19", uv: 8000, pv: 5000, sv: 3000, cv: 1500 },
  { name: "21", uv: 14000, pv: 7000, sv: 4500, cv: 2000 },
  { name: "23", uv: 9000, pv: 4500, sv: 2800, cv: 1400 },
  { name: "25", uv: 7000, pv: 3500, sv: 2300, cv: 1200 },
  { name: "27", uv: 6000, pv: 3000, sv: 2000, cv: 1000 },
];

const ActivityChart: React.FC = () => {
  return (
    <Box
      sx={{
        padding: "8px",
        backgroundColor: "rgb(55 55 72)",
        borderRadius: "8px",
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography
          variant="h6"
          sx={{ fontSize: 15, fontWeight: 600, mx: 2 }}
          color="white"
        >
          Activity
        </Typography>
        <FormControl variant="outlined" size="small" sx={{ color: "white" }}>
          <Select
            value="Weekly"
            sx={{ color: "white", border: "0px soild", borderRadius: 6 }}
            inputProps={{
              sx: {
                color: "white",
                border: "0px soild",
                borderRadius: 6,
                background: "grey",
                fontSize: 12,
              },
            }}
          >
            <MenuItem value="Weekly">Weekly</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <CartesianGrid stroke="#ebf3f0" vertical={false} />
          <XAxis dataKey="name" tick={{ fill: "white" }} />
          <YAxis
            tick={{ fill: "white" }}
            ticks={[0, 5000, 10000, 15000]}
            tickFormatter={(tick) => `${tick / 1000}k`}
            domain={[0, 15000]}
          />
          <Bar
            dataKey="uv"
            fill="#8884d8"
            radius={[10, 10, 0, 0]}
            barSize={12}
          />
          <Bar
            dataKey="pv"
            fill="#8884d8"
            radius={[10, 10, 0, 0]}
            barSize={12}
          />
          <Bar
            dataKey="sv"
            fill="#8884d8"
            radius={[10, 10, 0, 0]}
            barSize={12}
          />
          <Bar
            dataKey="cv"
            fill="#8884d8"
            radius={[10, 10, 0, 0]}
            barSize={12}
          />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default ActivityChart;
